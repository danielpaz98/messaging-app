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
	const classNames = twMerge("bg-black text-echo-blue text-sm flex gap-4 py-3 px-5 rounded-lg", className);

	return (
		<form className={classNames} placeholder="JAJAJAJA">
			<input
				className="w-full placeholder:text-current bg-inherit outline-none"
				placeholder={placeholder}
				type="text"
			/>

			{SearchIcon && isValidElement(SearchIcon()) ? (
				SearchIcon()
			) : (
				<button className="w-4 mobile:w-5" type="button">
					<MagnifyingGlassIcon className="pointer-events-none text-link-water w-[inherit] h-[inherit]" />
				</button>
			)}
		</form>
	);
}

export default Searcher;
