import { useState } from "react";
// PLUGINS
import { twMerge } from "tailwind-merge";
import TextareaAutosize from "react-textarea-autosize";
// ICONS
import { ReactComponent as MicrophoneFillIcon } from "~/assets/icons/microphone-fill.svg";
import { ReactComponent as ImageIcon } from "~/assets/icons/image.svg";
import { ReactComponent as FaceSmileBeamIcon } from "~/assets/icons/face-smile-beam.svg";
import { ReactComponent as PaperPlaneIcon } from "~/assets/icons/paper-plane.svg";
import { ReactComponent as LocationDotIcon } from "~/assets/icons/location-dot.svg";

type Props = {
	className?: string;
};

function ChatBox({ className }: Props) {
	const classNames = twMerge("bg-jaguar text-bali-hai py-3 px-6", className);
	const [message, setMessage] = useState("");

	return (
		<section className={classNames}>
			<div className="flex justify-center flex-wrap gap-2 mobile:gap-3 xs:justify-start">
				<div className="flex items-end gap-2 mobile:gap-5 xs:py-4">
					<button type="button">
						<ImageIcon className="pointer-events-none" height={20} width={20} />
					</button>

					<button type="button">
						<FaceSmileBeamIcon className="pointer-events-none" height={20} width={20} />
					</button>

					<button type="button">
						<LocationDotIcon className="pointer-events-none" height={20} width={20} />
					</button>
				</div>

				<div className="flex flex-grow w-full xs:w-auto gap-2 mobile:gap-5">
					<TextareaAutosize
						className="flex-grow resize-none outline-none rounded-3xl text-sm bg-black-russian-1 py-4 px-6 max-h-[130px]"
						placeholder="Add a comment..."
						value={message}
						onChange={(e) => setMessage(e.target.value.trimStart())}
					/>

					<div className="flex items-end py-4">
						{message ? (
							<button type="button">
								<PaperPlaneIcon className="pointer-events-none" height={20} width={20} />
							</button>
						) : (
							<button className="px-1" type="button">
								<MicrophoneFillIcon className="pointer-events-none" height={18} />
							</button>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ChatBox;
