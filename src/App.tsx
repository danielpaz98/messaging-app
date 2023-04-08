// LAYOUTS
import DefaultLayout from "~/layouts/DefaultLayout";
// COMPONENTS
import { ChatView } from "~/components";

export default function App() {
	return (
		<DefaultLayout>
			<ChatView className="relative h-full grid md:grid-cols-[35%_65%] _860px:grid-cols-12 auto-rows-fr">
				<ChatView.ChatList className="_860px:col-span-4 lg:!col-span-3" />
				<ChatView.Chat className="_860px:col-span-8 lg:!col-span-6" />
				<ChatView.ChatInfo className="col-span-3" />
			</ChatView>
		</DefaultLayout>
	);
}
