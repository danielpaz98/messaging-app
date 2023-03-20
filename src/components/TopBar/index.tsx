// PLUGINS
import clsx from "clsx";
// COMPONENTS
import UserNotifications from "./UserNotifications";
import DropdownUserMenu from "./DropdownUserMenu";
import Searcher from "./Searcher";

type Props = {
	className?: string;
};

export default function TopBar({ className }: Props) {
	const classNames = clsx("bg-[#1e1f25] py-4 px-10", className);

	return (
		<header className={classNames}>
			<nav className="flex justify-between">
				<Searcher className="mx-auto" placeholder="Search anything..." />

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
