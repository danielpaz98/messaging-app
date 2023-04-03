// COMPONENTS
import _MessageList, { Props as _MessageListProps } from "./MessageList";
import MessageListItem, { Props as MessageListItemProps } from "./MessageListItem";

interface MessageListProps {
	(props: _MessageListProps): JSX.Element;
	Item: (props: MessageListItemProps) => JSX.Element;
}

export const MessageList: MessageListProps = Object.assign(_MessageList, {
	Item: MessageListItem,
});

export default MessageList;
