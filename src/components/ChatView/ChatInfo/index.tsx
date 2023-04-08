import { useContext } from "react";
// PLUGINS
import { twMerge } from "tailwind-merge";
// CONTEXTS
import { ChatViewContext } from "../ChatView";
// COMPONENTS
import ProfilePicture from "~/components/ProfilePicture";
import AttachmentList from "./AttachmentList";
import MemberList from "./MemberList";
// ICONS
import { ReactComponent as ArrowDownIcon } from "~/assets/icons/arrow-down.svg";
import { ReactComponent as PlusIcon } from "~/assets/icons/plus.svg";
import { ReactComponent as XMarkIcon } from "~/assets/icons/xmark.svg";
// FAKE DATA
import { attachments, members } from "./data";

export type Props = {
	className?: string;
};

function ChatInfo({ className }: Props) {
	const { showChatInfo, setShowChatInfo } = useContext(ChatViewContext);

	const classNames = twMerge(
		`w-screen h-full p-10 bg-black-russian-1 fixed top-0 right-0 z-50 !transition-transform overflow-y-auto
		hover-scrollbar md:w-1/2 lg:w-auto translate-x-full lg:translate-x-0 lg:static lg:!transition-none `,
		showChatInfo ? "translate-x-0" : "translate-x-full",
		className
	);

	return (
		<section className={classNames}>
			<button className="text-storm-gray self-start lg:hidden" type="button" onClick={() => setShowChatInfo(false)}>
				<XMarkIcon width={28} />
			</button>

			<div className="flex gap-10 flex-col">
				<div className="grid place-items-center gap-4">
					<ProfilePicture
						className="w-40 h-40 lg:w-24 lg:h-24"
						src="https://api.dicebear.com/5.x/icons/svg?seed=Socks"
					/>
					<p className="text-white text-2xl lg:text-base">Design Team</p>
				</div>

				<div>
					<button className="w-full flex items-center justify-between gap-1 font-bold text-storm-gray" type="button">
						<span>Attachments</span>
						<ArrowDownIcon className="pointer-events-none" width={12} />
					</button>

					<div className="mt-5">
						<AttachmentList>
							{attachments.map(({ id, fileName, fileSize, fileFormat, fileUrl, hour }) => (
								<AttachmentList.Item
									key={id}
									fileFormat={fileFormat}
									fileName={fileName}
									fileSize={fileSize}
									fileUrl={fileUrl}
									hour={hour}
									id={id}
								/>
							))}
						</AttachmentList>

						<button className="mt-6 text-neon-blue text-sm font-medium" type="button">
							View all
						</button>
					</div>
				</div>

				<div>
					<button className="w-full flex items-center justify-between gap-1 font-bold text-storm-gray" type="button">
						<span>Members</span>
						<ArrowDownIcon className="pointer-events-none" width={12} />
					</button>

					<div className="mt-5">
						<button className="flex items-center gap-[14px] text-neon-blue text-base font-medium" type="button">
							<div className="grid place-items-center rounded-full bg-jaguar w-10 h-10">
								<PlusIcon className="pointer-events-none" width={14} />
							</div>
							<span className="text-left">Add Member</span>
						</button>

						<MemberList className="mt-7">
							{members.map(({ id, username, image }) => (
								<MemberList.Item key={id} id={id} image={image} username={username} />
							))}
						</MemberList>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ChatInfo;
