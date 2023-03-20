// COMPONENTS
import Sidebar from "~/components/Sidebar";
import TopBar from "~/components/TopBar";

type Props = {
	children?: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
	return (
		<div className="flex">
			<Sidebar />

			<div className="container">
				<TopBar />
				<main>{children}</main>
			</div>
		</div>
	);
}
