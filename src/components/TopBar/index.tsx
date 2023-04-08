// PLUGINS
import { twMerge } from "tailwind-merge";
// COMPONENTS
import UserNotifications from "./UserNotifications";
import DropdownUserMenu from "./DropdownUserMenu";
import Searcher from "~/components/Searcher";
// IMAGES
import { ReactComponent as Logo } from "~/assets/images/svg/logo.svg";

type Props = {
	className?: string;
};

function TopBar({ className }: Props) {
	const classNames = twMerge(
		"min-h-[var(--header-height)] border-b-[1px] border-b-black-pearl bg-black-russian-1 py-4 px-10",
		className
	);

	return (
		<header className={classNames}>
			<nav className="flex items-center justify-between gap-5 md:gap-0">
				<a className="w-9 h-9 mobile:w-12 mobile:h-12 block lg:hidden" href="/" tabIndex={-1}>
					<Logo className="w-[inherit] h-[inherit]" />
				</a>

				<Searcher
					className="flex-grow mobile:flex-grow-0 mobile:min-w-[290px] mx-auto"
					placeholder="Search anything..."
				/>

				<ul className="flex items-center gap-5 md:gap-[30px]">
					<li className="flex">
						<UserNotifications className="w-4 mobile:w-5" notifications={2} />
					</li>

					<li>
						<DropdownUserMenu className="[&>picture]:w-8 [&>picture]:h-8 mobile:[&>picture]:w-10 mobile:[&>picture]:h-10" />
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default TopBar;
