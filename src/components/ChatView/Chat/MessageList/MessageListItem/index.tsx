// PLUGINS
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
// ICONS
import { ReactComponent as EllipsisVerticalIcon } from "~/assets/icons/ellipsis-vertical.svg";

export type Props = {
	id: number;
	inbound?: boolean;
	children?: React.ReactNode;
	className?: string;
};

function MessageListItem({ inbound, children, className }: Props) {
	const roundedNone = inbound ? "[&:first-child>span]:rounded-tr-none" : "[&:first-child>span]:rounded-tl-none";
	const classNames = twMerge("flex gap-1 w-fit break-words text-light-slate-gray text-sm", className);
	const messageClasses = twMerge("flex-grow p-3 rounded-[10px] bg-black-russian-1");

	return (
		<li className={clsx(classNames, roundedNone)}>
			<span className={clsx(messageClasses, inbound && "bg-neon-blue text-white order-1")}>{children}</span>

			<button className="shrink-0 outline-none px-2" type="button">
				<EllipsisVerticalIcon className="pointer-events-none" height={14} />
			</button>
		</li>
	);
}

export default MessageListItem;
