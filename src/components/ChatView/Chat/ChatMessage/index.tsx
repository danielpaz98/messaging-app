// PLUGINS
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
// TYPES
import { TChats } from "~/components/ChatView/types";
// COMPONENTS
import { ProfilePicture } from "~/components";
import { MessageList, MessageByTypes } from "~/components/ChatView/Chat";

type Props = TChats & {
	className?: string;
};

function ChatMessage({ className, image, username, hour, inbound, messages }: Props) {
	const classNames = clsx(twMerge("flex gap-3", className), { "place-content-end": inbound });

	return (
		<div className={classNames}>
			<ProfilePicture className={clsx("w-9 h-9", { "order-1": inbound })} src={image} />

			<div className="grid max-w-[100%] _460px:max-w-[65%]">
				<div className={clsx("flex items-center gap-3", { "ml-auto": inbound })}>
					<p className={clsx("text-white", { "order-1": inbound })}>{username}</p>
					<time className="text-light-slate-gray text-sm">{hour}</time>
				</div>

				<MessageList className="mt-1">
					{messages?.map((message, key) => (
						<MessageList.Item key={message.id || key} id={message.id} inbound={inbound}>
							<MessageByTypes message={message} />
						</MessageList.Item>
					))}
				</MessageList>
			</div>
		</div>
	);
}

export default ChatMessage;
