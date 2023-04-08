// PLUGINS
import { twMerge } from "tailwind-merge";
// COMPONENTS
import NotificationBadge from "~/components/NotificationBadge";
// ICONS
import { ReactComponent as BellIcon } from "~/assets/icons/bell.svg";

type Props = {
	className?: string;
	notifications?: number;
};

export default function UserNotifications({ className, notifications: notificationsProp }: Props) {
	const classNames = twMerge("relative w-5", className);
	const notifications = Number(notificationsProp);

	return (
		<button className={classNames} type="button">
			<BellIcon className="pointer-events-none text-whisper w-[inherit] h-[inherit]" />

			{notifications > 0 && (
				<NotificationBadge className="bg-neon-blue absolute -top-1 right-0" notifications={notifications} />
			)}
		</button>
	);
}
