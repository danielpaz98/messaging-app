// PLUGINS
import { twMerge } from "tailwind-merge";

type Props = {
	className?: string;
	notifications: number;
};

function NotificationBadge({ className, notifications }: Props) {
	const classNames = twMerge(
		"grid place-content-center text-[8px] font-bold bg-black text-white rounded-full w-[12px] h-[12px]",
		className
	);

	return <span className={classNames}>{notifications}</span>;
}

export default NotificationBadge;
