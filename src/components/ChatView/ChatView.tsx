import { createContext, useState } from "react";

export type Props = {
	children?: React.ReactNode;
	className?: string;
};

interface ChatViewContextProps {
	showChatList: boolean;
	setShowChatList: React.Dispatch<React.SetStateAction<boolean>>;
	showChatInfo: boolean;
	setShowChatInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ChatViewContext = createContext({} as ChatViewContextProps);

export default function ChatView({ children, className }: Props) {
	const [showChatList, setShowChatList] = useState<ChatViewContextProps["showChatInfo"]>(false);
	const [showChatInfo, setShowChatInfo] = useState<ChatViewContextProps["showChatInfo"]>(false);

	return (
		<ChatViewContext.Provider value={{ showChatList, setShowChatList, showChatInfo, setShowChatInfo }}>
			<section className={className}>{children}</section>
		</ChatViewContext.Provider>
	);
}
