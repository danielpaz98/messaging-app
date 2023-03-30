// PLUGINS
import { twMerge } from "tailwind-merge";

type Props = {
	className?: string;
	src: string;
};

function ProfilePicture({ className, src }: Props) {
	const classNames = twMerge("block w-10 h-10 rounded-full", className);

	return (
		<picture className={classNames}>
			<img alt="Profile Avatar" className="object-contain rounded-[inherit]" src={src} />
		</picture>
	);
}

export default ProfilePicture;
