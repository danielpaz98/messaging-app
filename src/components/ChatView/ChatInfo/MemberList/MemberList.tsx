// PLUGINS
import { twMerge } from "tailwind-merge";

export type Props = {
	children?: React.ReactNode;
	className?: string;
};

function MemberList({ children, className }: Props) {
	const classNames = twMerge("[&>li:not(:last-child)]:mb-6", className);

	return <ul className={classNames}>{children}</ul>;
}

export default MemberList;
