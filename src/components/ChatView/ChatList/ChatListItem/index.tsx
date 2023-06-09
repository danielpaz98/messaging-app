// PLUGINS
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
// COMPONENTS
import { ProfilePicture, NotificationBadge } from "~/components";
// ICONS
import { ReactComponent as MicrophoneOutlineIcon } from "~/assets/icons/microphone-outline.svg";
import { ReactComponent as CheckDoubleIcon } from "~/assets/icons/check-double.svg";

type Props = {
	className?: string;
	image: string;
	name: string;
	message: string | undefined;
	date: string;
	isTyping?: boolean;
	isOnline?: boolean;
	readMessage?: boolean;
	isVoiceMessage?: boolean;
	unreadQuantity?: number;
};

function ChatListItem({
	className,
	image,
	name,
	date,
	message,
	isTyping,
	isOnline,
	readMessage,
	isVoiceMessage,
	unreadQuantity,
}: Props) {
	const classNames = twMerge("flex justify-between gap-4", className);

	return (
		<div className={classNames}>
			<ProfilePicture
				className={clsx("flex-shrink-0 w-[50px] h-[50px]", {
					"relative before:block before:bg-emerald before:w-2 before:h-2 before:rounded-full before:absolute before:bottom-1 before:right-1 before:shadow-[0_0_0_2px_#fefdfd]":
						isOnline,
				})}
				src={image}
			/>

			<div className="flex-grow flex justify-between gap-1">
				<div className="grid gap-1">
					<h4 className="text-whisper text-base font-bold truncate">{name}</h4>
					{isTyping ? (
						<p className="text-sea-green text-sm">Typing...</p>
					) : (
						<p className="text-light-gray text-sm truncate">
							{message ||
								(isVoiceMessage && (
									<>
										<MicrophoneOutlineIcon
											className="pointer-events-none flex-shrink-0 inline text-gray-chateau"
											height={17}
										/>

										<span className="ml-[6px]">Voice message</span>
									</>
								))}
						</p>
					)}
				</div>

				<div className="grid gap-1 text-sm">
					<time className="text-gray-chateau whitespace-nowrap">{date}</time>

					{unreadQuantity && (
						<NotificationBadge
							className="ml-auto w-4 h-4 bg-persian-red text-sm leading-none"
							notifications={unreadQuantity}
						/>
					)}

					{readMessage && (
						<CheckDoubleIcon className="pointer-events-none ml-auto text-emerald" height={8} width={16} />
					)}
				</div>
			</div>
		</div>
	);
}

export default ChatListItem;
