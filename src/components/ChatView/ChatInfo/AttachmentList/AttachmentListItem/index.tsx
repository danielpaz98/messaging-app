// COMPONENTS
import { IconFile } from "~/components";
// TYPES
import type { TFile } from "~/components/ChatView/types";
import type { FormatType } from "~/components/IconFile";

export type Props = TFile & {
	className?: string;
	fileFormat: keyof typeof FormatType;
	hour: string;
};

function AttachmentListItem({ className, fileFormat, fileUrl, fileName, fileSize, hour }: Props) {
	return (
		<li className={className}>
			<a className="flex gap-[6px]" download={fileName} href={fileUrl} onClick={(e) => e.preventDefault()}>
				<div className="grid place-items-center rounded-full bg-jaguar w-10 h-10">
					<IconFile className="pointer-events-none" format={fileFormat} />
				</div>

				<div className="flex-grow leading-none">
					<p className="text-white text-sm font-medium">
						{fileName}.{fileFormat}
					</p>
					<small className="text-xs text-manatee">
						{fileSize}, {hour}
					</small>
				</div>
			</a>
		</li>
	);
}

export default AttachmentListItem;
