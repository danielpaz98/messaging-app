// PLUGINS
import { twMerge } from "tailwind-merge";
// COMPONENTS
import ProfilePicture from "~/components/ProfilePicture";
import AttachmentList from "./AttachmentList";
import MemberList from "./MemberList";
// ICONS
import { ReactComponent as ArrowDownIcon } from "~/assets/icons/arrow-down.svg";
import { ReactComponent as PlusIcon } from "~/assets/icons/plus.svg";
// FAKE DATA
import { attachments, members } from "./data";

export type Props = {
	className?: string;
};

function ChatInfo({ className }: Props) {
	const classNames = twMerge("overflow-y-auto hover-scrollbar flex flex-col gap-10 p-10 bg-black-russian-1", className);

	return (
		<section className={classNames}>
			<div className="grid place-items-center gap-4">
				<ProfilePicture className="w-24 h-24" src="https://api.dicebear.com/5.x/icons/svg?seed=Socks" />
				<p className="text-white">Design Team</p>
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
		</section>
	);
}

export default ChatInfo;
