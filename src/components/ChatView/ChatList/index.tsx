// PLUGINS
import { twMerge } from "tailwind-merge";
// COMPONENTS
import { Searcher } from "~/components";
import ChatListItem from "./ChatListItem";
// ICONS
import { ReactComponent as MagnifyingGlassIcon } from "~/assets/icons/magnifying-glass.svg";
import { ReactComponent as MessageLinesIcon } from "~/assets/icons/message-lines.svg";
// FAKE DATA
import { allChats, recentChats } from "./data";

export type Props = {
	className?: string;
};

function ChatList({ className }: Props) {
	const classNames = twMerge("flex flex-col h-full gap-5 bg-black-russian-2 p-6 pb-3 pr-3 overflow-hidden", className);

	return (
		<section className={classNames}>
			<div>
				<h2 className="text-white text-3xl font-bold mb-6">Messages</h2>

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
	);
}

export default ChatList;
