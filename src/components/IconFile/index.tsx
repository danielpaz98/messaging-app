// ICONS
import { ReactComponent as FileFigmaIcon } from "~/assets/icons/file-figma.svg";
import { ReactComponent as FileScratchIcon } from "~/assets/icons/file-scratch.svg";
import { ReactComponent as FileAdobeXDIcon } from "~/assets/icons/file-adobe-xd.svg";
import { ReactComponent as FileSvgIcon } from "~/assets/icons/file-svg.svg";

export enum FormatType {
	figma = "figma",
	scratch = "scratch",
	xd = "xd",
	svg = "svg",
}

type Props = React.SVGProps<SVGElement> & {
	format: keyof typeof FormatType;
};

function IconFile({ format, ...restProps }: Props) {
	const Icon = {
		[FormatType.figma]: <FileFigmaIcon width={15} {...restProps} />,
		[FormatType.scratch]: <FileScratchIcon width={22} {...restProps} />,
		[FormatType.xd]: <FileAdobeXDIcon width={22} {...restProps} />,
		[FormatType.svg]: <FileSvgIcon width={23} {...restProps} />,
	};

	return Icon[format];
}

export default IconFile;
