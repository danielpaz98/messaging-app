// PLUGINS
import { twMerge } from "tailwind-merge";
// IMAGES
import { ReactComponent as Logo } from "~/assets/images/svg/logo.svg";
// ICONS
import { ReactComponent as Grid2Icon } from "~/assets/icons/grid-2.svg";
import { ReactComponent as FilterIcon } from "~/assets/icons/filter.svg";
import { ReactComponent as BookOpenIcon } from "~/assets/icons/book-open.svg";
import { ReactComponent as GearIcon } from "~/assets/icons/gear.svg";
import { ReactComponent as PaperPlaneTopIcon } from "~/assets/icons/paper-plane-top.svg";
import { ReactComponent as FolderPlusIcon } from "~/assets/icons/folder-plus.svg";

type Props = {
	className?: string;
};

export default function Sidebar({ className }: Props) {
	const classNames = twMerge(
		"bg-[#1e1f25] min-w-[var(--sidebar-width)] h-screen overflow-y-auto hover-scrollbar px-4 py-5",
		className
	);

	return (
		<nav className={classNames}>
			<a href="/" tabIndex={-1}>
				<Logo height={64} width={64} />
			</a>

			<section className="mt-[150px]">
				<ul className="grid place-items-center gap-11">
					<li>
						<button type="button">
							<Grid2Icon className="pointer-events-none" fill="#5f6388" height={20} width={20} />
						</button>
					</li>

					<li>
						<button type="button">
							<FilterIcon className="pointer-events-none" fill="#5f6388" height={20} width={20} />
						</button>
					</li>

					<li>
						<button type="button">
							<BookOpenIcon className="pointer-events-none" fill="#5f6388" height={20} width={20} />
						</button>
					</li>

					<li>
						<button type="button">
							<GearIcon className="pointer-events-none" fill="#5f6388" height={20} width={20} />
						</button>
					</li>

					<li>
						<button className="bg-[#5051f9] p-3 rounded-[14px] shadow-[0_8px_14px_rgba(62,107,224,0.12)]" type="button">
							<PaperPlaneTopIcon className="pointer-events-none" fill="#fff" height={20} width={20} />
						</button>
					</li>

					<li>
						<button type="button">
							<FolderPlusIcon className="pointer-events-none" fill="#5f6388" height={20} width={20} />
						</button>
					</li>
				</ul>
			</section>
		</nav>
	);
}
