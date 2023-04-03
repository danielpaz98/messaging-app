// COMPONENTS
import _MemberList, { Props as _MemberListProps } from "./MemberList";
import MemberListItem, { Props as MemberListItemProps } from "./MemberListItem";

interface MemberListProps {
	(props: _MemberListProps): JSX.Element;
	Item: (props: MemberListItemProps) => JSX.Element;
}

export const MemberList: MemberListProps = Object.assign(_MemberList, {
	Item: MemberListItem,
});

export default MemberList;
