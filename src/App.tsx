// LAYOUTS
import DefaultLayout from "~/layouts/DefaultLayout";
// COMPONENTS
import { ChatView } from "~/components";

export default function App() {
	return (
		<DefaultLayout>
			<ChatView className="h-full grid grid-cols-12 auto-rows-fr">
				<ChatView.ChatList className="col-span-3" />
				<ChatView.Chat className="col-span-6" />
				<ChatView.ChatInfo className="col-span-3" />
			</ChatView>
		</DefaultLayout>
	);
}
