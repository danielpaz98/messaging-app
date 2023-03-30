// COMPONENTS
import { Searcher, SidebarChat } from "~/components";
// LAYOUTS
import DefaultLayout from "~/layouts/DefaultLayout";
// ICONS
import { ReactComponent as MagnifyingGlassIcon } from "~/assets/icons/magnifying-glass.svg";
import { ReactComponent as MessageLinesIcon } from "~/assets/icons/message-lines.svg";
// FAKE DATA
import { allChats, recentChats } from "~/data";

export default function App() {
	return (
		<DefaultLayout>
			<div className="h-full grid grid-cols-12">
				<section className="bg-[#212229] col-span-3 p-[24px] overflow-y-auto hover-scrollbar">
					<h2 className="text-[#fff] text-3xl font-bold mb-6">Messages</h2>

					<Searcher
						className="max-w-[262px] text-base leading-none text-[#a9abad] py-[14px] gap-2 mb-10"
						placeholder="Search..."
						searchIcon={() => (
							<button className="-order-1" type="button">
								<MagnifyingGlassIcon className="pointer-events-none" fill="#c2c7d0" height={20} width={20} />
							</button>
						)}
					/>

					<ul className="space-y-[30px]">
						{recentChats.map((chat) => (
							<li key={chat.id}>
								<SidebarChat
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

					<ul className="mt-8 space-y-[30px] space-y-reverse">
						<h4 className="flex items-center mb-4">
							<MessageLinesIcon className="inline" fill="#a9abad" height={13} width={13} />
							<span className="ml-2 text-[#b4b5b7] text-sm">All Message</span>
						</h4>

						{allChats.map((chat) => (
							<li key={chat.id}>
								<SidebarChat
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
				</section>
				<section className="bg-[#131517] col-span-6"></section>
				<section className="bg-[#1e1f25] col-span-3"></section>
			</div>
		</DefaultLayout>
	);
}
