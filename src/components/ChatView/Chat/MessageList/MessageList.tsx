// PLUGINS
import { twMerge } from "tailwind-merge";

export type Props = {
	children?: React.ReactNode;
	className?: string;
};

function MessageList({ children, className }: Props) {
	const classNames = twMerge("[&>li:not(:last-child)]:mb-2", className);

	return <ul className={classNames}>{children}</ul>;
}

export default MessageList;
