// PLUGINS
import { twMerge } from "tailwind-merge";
// COMPONENTS
import UserNotifications from "./UserNotifications";
import DropdownUserMenu from "./DropdownUserMenu";
import Searcher from "~/components/Searcher";

type Props = {
	className?: string;
};

function TopBar({ className }: Props) {
	const classNames = twMerge(
		"min-h-[var(--header-height)] border-b-[1px] border-background bg-black-russian-1 py-4 px-10",
		className
	);

	return (
		<header className={classNames}>
			<nav className="flex justify-between">
				<Searcher className="min-w-[290px] mx-auto" placeholder="Search anything..." />

				<ul className="flex items-center gap-[30px]">
					<li className="flex">
						<UserNotifications notifications={2} />
					</li>

					<li>
						<DropdownUserMenu />
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default TopBar;
