import { isValidElement } from "react";
// PLUGINS
import { twMerge } from "tailwind-merge";
// ICONS
import { ReactComponent as MagnifyingGlassIcon } from "~/assets/icons/magnifying-glass.svg";

type Props = {
	className?: string;
	placeholder?: string;
	searchIcon?: () => JSX.Element;
};

function Searcher({ className, placeholder, searchIcon: SearchIcon }: Props) {
	const classNames = twMerge("bg-[#050505] text-[#9babc5] text-sm flex gap-4 py-3 px-5 rounded-lg", className);

	return (
		<form className={classNames}>
			<input
				className="placeholder:text-[currentColor] bg-[inherit] flex-grow outline-none"
				placeholder={placeholder}
				type="text"
			/>

			{SearchIcon && isValidElement(SearchIcon()) ? (
				SearchIcon()
			) : (
				<button type="button">
					<MagnifyingGlassIcon className="pointer-events-none" fill="#c2c7d0" height={20} width={20} />
				</button>
			)}
		</form>
	);
}

export default Searcher;
