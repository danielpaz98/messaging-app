export type Props = {
	children?: React.ReactNode;
	className?: string;
};

export default function ChatView({ children, className }: Props) {
	return <section className={className}>{children}</section>;
}
