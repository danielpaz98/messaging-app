// PLUGINS
import { twMerge } from "tailwind-merge";
// COMPONENTS
import ProfilePicture from "~/components/ProfilePicture";
// ICONS
import { ReactComponent as ArrowDownIcon } from "~/assets/icons/arrow-down.svg";

type Props = {
	className?: string;
};

export default function DropdownUserMenu({ className }: Props) {
	const classNames = twMerge("cursor-pointer flex items-center gap-3", className);

	return (
		<div className={classNames}>
			<ProfilePicture src="https://api.dicebear.com/5.x/personas/svg?seed=Jack&backgroundColor=e7e7ff" />

			<i>
				<ArrowDownIcon className="pointer-events-none text-white" height={14} width={14} />
			</i>
		</div>
	);
}
