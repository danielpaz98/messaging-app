import { Fragment } from "react";
// PLUGINS
import { twMerge } from "tailwind-merge";
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

	return (
		<section className={classNames}>
			<div className="flex flex-col h-full">
				<section className="flex flex-col flex-grow px-3 overflow-hidden">
					<header className="flex justify-between px-3 py-7 gap-2 sticky top-0 bg-black-pearl">
						<div className="flex items-center gap-4">
							<ProfilePicture className="w-[60px] h-[60px]" src="https://api.dicebear.com/5.x/icons/svg?seed=Socks" />

							<div>
								<h2 className="text-white text-3xl">Design Team</h2>
								<small className="text-light-slate-gray text-sm">60 member, 10 online</small>
							</div>
						</div>

						<div className="flex items-center gap-3">
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
					</header>

					<div className="px-4 py-4 h-full overflow-y-auto hover-scrollbar">
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

				<ChatBox />
			</div>
		</section>
	);
}

export default Chat;
