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
				<section className="grid grid-rows-[1fr_3fr] gap-5 overflow-hidden bg-black-russian-2 col-span-3 p-6 pb-3 pr-3">
					<div>
						<h2 className="text-white text-3xl font-bold mb-6">Messages</h2>

						<Searcher
							className="text-base leading-none text-gray-chateau py-[14px] gap-2"
							placeholder="Search..."
							searchIcon={() => (
								<button className="-order-1" type="button">
									<MagnifyingGlassIcon
										className="pointer-events-none text-link-water"
										fill="currentColor"
										height={20}
										width={20}
									/>
								</button>
							)}
						/>
					</div>

					<div className="overflow-y-auto hover-scrollbar pr-3">
						<ul className="[&>li:not(:last-child)]:mb-[30px]">
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

						<ul className="mt-8 [&>li:not(:last-child)]:mb-[30px]">
							<h4 className="flex items-center mb-4">
								<MessageLinesIcon className="inline text-gray-chateau" fill="currentColor" height={13} width={13} />
								<span className="ml-2 text-mischka text-sm">All Message</span>
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
					</div>
				</section>
				<section className="bg-background col-span-6"></section>
				<section className="bg-black-russian-1 col-span-3"></section>
			</div>
		</DefaultLayout>
	);
}
