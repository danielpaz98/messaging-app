// COMPONENTS
import _AttachmentList, { Props as _AttachmentListProps } from "./AttachmentList";
import AttachmentListItem, { Props as AttachmentListItemProps } from "./AttachmentListItem";

interface AttachmentListProps {
	(props: _AttachmentListProps): JSX.Element;
	Item: (props: AttachmentListItemProps) => JSX.Element;
}

export const AttachmentList: AttachmentListProps = Object.assign(_AttachmentList, {
	Item: AttachmentListItem,
});

export default AttachmentList;
