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
	const classNames = twMerge("relative", className);
	const notifications = Number(notificationsProp);

	return (
		<button className={classNames} type="button">
			<BellIcon className="pointer-events-none" fill="#eeeeee" height={20} width={20} />

			{notifications > 0 && (
				<NotificationBadge className="!bg-[#5150f9] absolute -top-1 right-0" notifications={notifications} />
			)}
		</button>
	);
}
