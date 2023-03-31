// COMPONENTS
import Sidebar from "~/components/Sidebar";
import TopBar from "~/components/TopBar";

type Props = {
	children?: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
	return (
		<div className="main-container flex">
			<Sidebar />

			<div className="container">
				<TopBar />
				<main className="h-[calc(100vh-var(--header-height))]">{children}</main>
			</div>
		</div>
	);
}
