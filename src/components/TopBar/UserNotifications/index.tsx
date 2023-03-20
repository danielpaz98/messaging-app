// ICONS
import clsx from "clsx";
import { ReactComponent as BellIcon } from "~/assets/icons/bell.svg";

type Props = {
	className?: string;
	notifications?: number;
};

export default function UserNotifications({ className, notifications }: Props) {
	const classNames = clsx("relative", className);

	return (
		<button className={classNames} type="button">
			<BellIcon className="pointer-events-none" fill="#eeeeee" height={20} width={20} />

			{Number(notifications) > 0 && (
				<span className="text-[8px] font-bold bg-[#5150f9] text-[#fff] rounded-full inline-block w-[12px] h-[12px] absolute -top-1 right-0">
					{notifications}
				</span>
			)}
		</button>
	);
}
