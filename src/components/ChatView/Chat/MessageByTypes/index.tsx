// TYPES
import { TMessage, EMessageTypes } from "~/components/ChatView/types";

type MessageTypeProps = Omit<TMessage, "id" | "type">;

function MessageTypeImage(props: MessageTypeProps) {
	return (
		<>
			{props.text && <p className="mb-2">{props.text}</p>}

			<ul className="flex gap-3">
				{props?.files?.map((file) => (
					<li key={file.id}>
						<picture>
							<img alt={file.fileUrl} className="rounded-[10px]" src={file.fileUrl} />
						</picture>
					</li>
				))}
			</ul>
		</>
	);
}

function MessageByTypes({ message }: { message: TMessage }) {
	const { type, text, files } = message;

	const Message = {
		[EMessageTypes.text]: <>{text}</>,
		[EMessageTypes.image]: <MessageTypeImage files={files} text={text} />,
	};

	return Message[type];
}

export default MessageByTypes;
