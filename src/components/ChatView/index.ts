// COMPONENTS
import _ChatView, { Props as ChatViewProps } from "./ChatView";
import ChatList, { Props as ChatListProps } from "./ChatList";
import Chat, { Props as ChatProps } from "./Chat";

interface ChatViewComponent {
	(props: ChatViewProps): JSX.Element;
	ChatList: (props: ChatListProps) => JSX.Element;
	Chat: (props: ChatProps) => JSX.Element;
}

export const ChatView: ChatViewComponent = Object.assign(_ChatView, {
	ChatList,
	Chat,
});

export default ChatView;
