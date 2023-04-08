// COMPONENTS
import Sidebar from "~/components/Sidebar";
import TopBar from "~/components/TopBar";

type Props = {
	children?: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
	return (
		<div className="main-container lg:flex">
			<Sidebar className="hidden lg:block" />

			<div className="main-container">
				<TopBar className="p-4 md:py-4 md:px-10" />
				<main className="h-[calc(100vh-var(--header-height))]">{children}</main>
			</div>
		</div>
	);
}
