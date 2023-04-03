export enum EMessageTypes {
	text = "text",
	image = "image",
}

export type TFile = {
	id: number;
	fileUrl: string;
	fileName?: string;
	fileSize?: string;
};

export type TMessage = {
	id: number;
	type: keyof typeof EMessageTypes;
	text?: string;
	files?: TFile[];
};

export type TChats = {
	id: number;
	hour: string;
	date: string;
	image: string;
	username: string;
	inbound: boolean;
	messages: TMessage[];
};
