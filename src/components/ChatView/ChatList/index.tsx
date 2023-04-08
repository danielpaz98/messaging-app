import { useContext } from "react";
// PLUGINS
import { twMerge } from "tailwind-merge";
// CONTEXTS
import { ChatViewContext } from "../ChatView";
// COMPONENTS
import { Searcher } from "~/components";
import ChatListItem from "./ChatListItem";
// ICONS
import { ReactComponent as MagnifyingGlassIcon } from "~/assets/icons/magnifying-glass.svg";
import { ReactComponent as MessageLinesIcon } from "~/assets/icons/message-lines.svg";
import { ReactComponent as MenuIcon } from "~/assets/icons/menu.svg";
import { ReactComponent as OpenMenuIcon } from "~/assets/icons/menu-open.svg";
import { ReactComponent as XMarkIcon } from "~/assets/icons/xmark.svg";
// FAKE DATA
import { allChats, recentChats } from "./data";

export type Props = {
	className?: string;
};

function ChatList({ className }: Props) {
	const { showChatList, setShowChatList } = useContext(ChatViewContext);

	const classNames = twMerge(
		`flex flex-col h-full gap-5 bg-black-russian-2 p-6 pb-3 pr-3 overflow-hidden w-screen _460px:w-auto 
		fixed top-0 left-0 z-50 md:static transition-transform md:translate-x-0 md:transition-none`,
		showChatList ? "translate-x-0" : "-translate-x-full",
		className
	);

	return (
		<>
			<section className={classNames}>
				<div>
					<h2 className="flex items-center justify-between text-white text-3xl font-bold mb-6 md:block">
						<span>Messages</span>

						<button className="text-storm-gray md:hidden" type="button" onClick={() => setShowChatList(false)}>
							<XMarkIcon width={28} />
						</button>
					</h2>

					<Searcher
						className="text-base leading-none text-gray-chateau py-[14px] gap-2"
						placeholder="Search..."
						searchIcon={() => (
							<button className="-order-1" type="button">
								<MagnifyingGlassIcon className="pointer-events-none text-link-water" height={20} width={20} />
							</button>
						)}
					/>
				</div>

				<div className="overflow-y-auto hover-scrollbar pr-3">
					<ul className="[&>li:not(:last-child)]:mb-[30px]">
						{recentChats.map((chat) => (
							<li key={chat.id}>
								<ChatListItem
									date={chat.date}
									image={chat.image}
									isOnline={chat.isOnline}
									isTyping={chat.isTyping}
									message={chat.message}
									name={chat.name}
									readMessage={chat.readMessage}
									unreadQuantity={chat.unreadQuantity}
								/>
							</li>
						))}
					</ul>

					<ul className="mt-8 [&>li:not(:last-child)]:mb-[30px]">
						<h4 className="flex items-center mb-4">
							<MessageLinesIcon className="pointer-events-none inline text-gray-chateau" height={13} width={13} />
							<span className="ml-2 text-mischka text-sm">All Message</span>
						</h4>

						{allChats.map((chat) => (
							<li key={chat.id}>
								<ChatListItem
									date={chat.date}
									image={chat.image}
									isOnline={chat.isOnline}
									isTyping={chat.isTyping}
									isVoiceMessage={chat.isVoiceMessage}
									message={chat.message}
									name={chat.name}
									readMessage={chat.readMessage}
									unreadQuantity={chat.unreadQuantity}
								/>
							</li>
						))}
					</ul>
				</div>
			</section>

			<button
				className="fixed z-10 bottom-2 right-14 p-1 bg-neon-blue text-white rounded-full md:hidden"
				type="button"
				onClick={() => setShowChatList(!showChatList)}
			>
				{showChatList ? <OpenMenuIcon height={24} width={24} /> : <MenuIcon height={24} width={24} />}
			</button>
		</>
	);
}

export default ChatList;
