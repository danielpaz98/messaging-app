// PLUGINS
import clsx from "clsx";
// ICONS
import { ReactComponent as ArrowDownIcon } from "~/assets/icons/arrow-down.svg";

type Props = {
	className?: string;
};

export default function DropdownUserMenu({ className }: Props) {
	const classNames = clsx("cursor-pointer flex items-center gap-3", className);

	return (
		<div className={classNames}>
			<picture className="block w-10 h-10 bg-[#e7e7ff] overflow-hidden rounded-full">
				<img
					alt="Profile Avatar"
					className="object-contain"
					src="https://api.dicebear.com/5.x/personas/svg?seed=Jack"
				/>
			</picture>

			<i>
				<ArrowDownIcon className="pointer-events-none" fill="#fefefe" height={14} width={14} />
			</i>
		</div>
	);
}
