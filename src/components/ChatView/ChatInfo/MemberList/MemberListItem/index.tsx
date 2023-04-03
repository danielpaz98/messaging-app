// COMPONENTS
import ProfilePicture from "~/components/ProfilePicture";

export type Props = {
	id: number;
	image: string;
	username: string;
	className?: string;
};

function MemberListItem({ image, username, className }: Props) {
	return (
		<li className={className}>
			<div className="flex gap-[10px]">
				<ProfilePicture className="w-[30px] h-[1.875rem]" src={image} />
				<span className="text-whisper font-medium">{username}</span>
			</div>
		</li>
	);
}

export default MemberListItem;
