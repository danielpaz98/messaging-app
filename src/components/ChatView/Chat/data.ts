// IMAGES
import PreviewImage1 from "~/assets/images/png/preview-image-1.png";
import PreviewImage2 from "~/assets/images/png/preview-image-2.png";
// TYPES
import { TChats, EMessageTypes } from "~/components/ChatView/types";

export const chats: TChats[] = [
	{
		id: 1,
		hour: "10:12 AM",
		date: "",
		image: "https://api.dicebear.com/5.x/personas/svg?seed=Abby&backgroundColor=ebbf9a",
		username: "Killan James",
		inbound: false,
		messages: [
			{ id: 1, type: EMessageTypes.text, text: "Hi, Are you still Web Designer." },
			{ id: 2, type: EMessageTypes.text, text: "would love to see some Design 😁" },
		],
	},
	{
		id: 2,
		hour: "10:30 AM",
		date: "Today, March 24",
		image: "https://api.dicebear.com/5.x/personas/svg?seed=Angel&backgroundColor=eda0a8",
		username: "Claudia Maudi",
		inbound: false,
		messages: [
			{
				id: 3,
				type: EMessageTypes.text,
				text: "Hey, happy to hear from you. Yes, I will be back in a couple fo days.",
			},
			{ id: 4, type: EMessageTypes.text, text: "Here are some Design i took earlier today." },
			{
				id: 5,
				type: EMessageTypes.image,
				files: [
					{ id: 1, fileUrl: PreviewImage1 },
					{ id: 2, fileUrl: PreviewImage2 },
				],
			},
		],
	},
	{
		id: 3,
		hour: "10:30 AM",
		date: "Today, March 24",
		image: "https://api.dicebear.com/5.x/personas/svg?seed=Tiger&backgroundColor=f2f2f2",
		username: "Dristin Watson",
		inbound: true,
		messages: [{ id: 6, type: EMessageTypes.text, text: "Great 🔥 That’s a nice design Idea. 😍👏" }],
	},
	{
		id: 4,
		hour: "8:20 PM",
		date: "Today, March 24",
		image: "https://api.dicebear.com/5.x/personas/svg?seed=Miss%20kitty&backgroundColor=8acee2",
		username: "Milie Nose",
		inbound: false,
		messages: [{ id: 7, type: EMessageTypes.text, text: "Awesome 🔥" }],
	},
];

export const groupChatsByDate = Object.entries(
	chats?.reduce((group: Record<string, TChats[]>, item) => {
		const { date } = item;
		group[date] = group[date] ?? [];
		group[date].push(item);

		return group;
	}, {})
);
