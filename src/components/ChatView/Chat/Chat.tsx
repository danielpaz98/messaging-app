import { useContext, Fragment } from "react";
// PLUGINS
import { twMerge } from "tailwind-merge";
// CONTEXTS
import { ChatViewContext } from "../ChatView";
// COMPONENTS
import ProfilePicture from "~/components/ProfilePicture";
import ChatMessage from "./ChatMessage";
import ChatBox from "./ChatBox";
// FAKE DATA
import { groupChatsByDate } from "./data";
// ICONS
import { ReactComponent as CirclePlusIcon } from "~/assets/icons/circle-plus.svg";

export type Props = {
	className?: string;
};

function Chat({ className }: Props) {
	const classNames = twMerge("bg-black-pearl", className);

	const { setShowChatInfo } = useContext(ChatViewContext);

	return (
		<section className={classNames}>
			<div className="flex flex-col h-full">
				<section className="flex flex-col flex-grow px-3 overflow-hidden">
					<header className="px-2 py-4 mobile:px-3 mobile:py-7 gap-2 sticky top-0 bg-black-pearl">
						<section className="grid xs:grid-cols-[auto_auto] justify-between items-center gap-y-1 gap-x-4">
							<div
								aria-hidden="true"
								className="flex justify-center xs:justify-start flex-wrap items-center gap-y-1 gap-x-8 _460px:gap-x-4 cursor-pointer lg:pointer-events-none"
								onClick={() => setShowChatInfo(true)}
							>
								<ProfilePicture
									className="w-[60px] h-[60px] flex-shrink-0"
									src="https://api.dicebear.com/5.x/icons/svg?seed=Socks"
								/>

								<div className="text-center xs:text-start w-full xs:w-auto">
									<h2 className="text-white text-3xl mx-auto max-w-[200px] truncate" title="Design Team">
										Design Team
									</h2>
									<small className="text-light-slate-gray text-sm">60 member, 10 online</small>
								</div>
							</div>

							<div className="xs:grid mx-auto gap-8 xs:mx-0 row-start-2 grid-cols-[60px_auto] _460px:gap-4 _460px:block _460px:row-start-auto">
								<div className="flex items-center gap-3 col-start-2">
									<div className="flex [&>*:not(:first-child)]:-ml-1 [&>*]:border [&>*]:border-black-pearl">
										<ProfilePicture
											className="w-7 h-7"
											src="https://api.dicebear.com/5.x/personas/svg?seed=Abby&backgroundColor=ebbf9a"
										/>
										<ProfilePicture
											className="w-7 h-7"
											src="https://api.dicebear.com/5.x/personas/svg?seed=Angel&backgroundColor=eda0a8"
										/>
										<ProfilePicture
											className="w-7 h-7"
											src="https://api.dicebear.com/5.x/personas/svg?seed=Miss%20kitty&backgroundColor=8acee2"
										/>
										<ProfilePicture
											className="w-7 h-7"
											src="https://api.dicebear.com/5.x/personas/svg?seed=Tiger&backgroundColor=f2f2f2"
										/>
									</div>

									<button type="button">
										<CirclePlusIcon className="pointer-events-none" height={32} width={32} />
									</button>
								</div>
							</div>
						</section>
					</header>

					<div className="p-3 h-full overflow-y-auto hover-scrollbar">
						{groupChatsByDate?.map(([date, chats]) => (
							<Fragment key={date}>
								{date && (
									<span className="flex items-center gap-5 text-light-slate-gray text-sm mb-9 before:flex-grow before:h-[1px] before:bg-black-russian-2 after:flex-grow after:h-[1px] after:bg-black-russian-2">
										{date}
									</span>
								)}

								{chats?.map((chat) => (
									<ChatMessage
										key={chat.id}
										className="[&:not(:last-child)]:mb-9"
										date={chat.date}
										hour={chat.hour}
										id={chat.id}
										image={chat.image}
										inbound={chat.inbound}
										messages={chat.messages}
										username={chat.username}
									/>
								))}
							</Fragment>
						))}
					</div>
				</section>

				<ChatBox className="py-3 px-2 mobile:px-6" />
			</div>
		</section>
	);
}

export default Chat;
