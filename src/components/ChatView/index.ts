// COMPONENTS
import _ChatView, { Props as ChatViewProps } from "./ChatView";
import ChatList, { Props as ChatListProps } from "./ChatList";
import ChatInfo, { Props as ChatInfoProps } from "./ChatInfo";
import Chat, { Props as ChatProps } from "./Chat";

interface ChatViewComponent {
	(props: ChatViewProps): JSX.Element;
	Chat: (props: ChatProps) => JSX.Element;
	ChatList: (props: ChatListProps) => JSX.Element;
	ChatInfo: (props: ChatInfoProps) => JSX.Element;
}

export const ChatView: ChatViewComponent = Object.assign(_ChatView, {
	Chat,
	ChatList,
	ChatInfo,
});

export default ChatView;
