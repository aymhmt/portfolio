import IconGithub from "@/components/icons/github";
import { IconWorld } from "@tabler/icons-react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formattedDate = (date: string) =>
	new Date(date).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
	});
export const formattedDateTimeline = (
	date: string,
	formatOpts?: Intl.DateTimeFormatOptions | undefined,
) =>
	new Date(date).toLocaleDateString(
		"en-US",
		formatOpts
			? formatOpts
			: {
					year: "numeric",
				},
	);

export const navItems = [
	{ href: "/", label: "Readme" },
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/stack", label: "Stack" },
];

const dateFormat = {
	day: {
		year: "numeric" as const,
		month: "long" as const,
		day: "numeric" as const,
	},
	month: {
		year: "numeric" as const,
		month: "long" as const,
	},
	year: {
		year: "numeric" as const,
	},
};

const changelogItems: Array<{
	date: string;
	event: string;
	title: string;
	description?: string;
	icon?: string;
	dateFormatOptions?: (typeof dateFormat)[keyof typeof dateFormat];
	photos?: Array<{ src: string; variant: "1x1" | "4x3" | "4x5" }>;
}> = [
	{
		date: "2023-07-04",
		event: "A few photos of mine.",
		title: "Me",
		dateFormatOptions: dateFormat.day,
		photos: [
			{
				src: "/img/me.jpg",
				variant: "4x5",
			},
			{
				src: "/img/abi.JPG",
				variant: "4x5",
			},
			{
				src: "/img/IMG_4064.JPG",
				variant: "4x5",
			},
			{
				src: "/img/IMG_4083.JPG",
				variant: "4x5",
			},
		],
	},
	{
		date: "2023-04-21",
		event: "The tools I own.",
		title: "Desk",
		dateFormatOptions: dateFormat.day,
		photos: [
			{
				src: "/img/desktop.jpg",
				variant: "4x5",
			},
			{
				src: "/img/desktop_two.jpg",
				variant: "4x5",
			},
			{
				src: "/img/school.JPG",
				variant: "4x5",
			},
		],
	},
	{
		date: "2022-07-08",
		event: "Fun moments of my life.",
		title: "Enjoy",
		photos: [
			{
				src: "/img/enjoy.JPG",
				variant: "4x5",
			},
			{
				src: "/img/IMG_2892.JPG",
				variant: "4x5",
			},
			{
				src: "/img/IMG_3502.JPG",
				variant: "4x5",
			},
		],
	},
] as const;

export const changelog = changelogItems.sort(
	(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export const projects = [
	{
		name: "aymuhammet.com.tr",
		githubSlug: "aymhmt/portfolio",
		released: "2024-11-11",
		description: "My website.",
		links: [
			{
				href: "https://aymuhammet.com.tr",
				label: "Website",
				icon: IconWorld,
			},
			{
				href: "https://github.com/aymhmt/portfolio",
				label: "GitHub",
				icon: IconGithub,
			},
		],
		metrics: [],
		featured: true,
	},

	{
		name: "Soren",
		githubSlug: "aymhmt/Soren",
		released: "2024-11-23",
		description: "Login Page.",
		links: [
			{
				href: "https://github.com/aymhmt/Soren",
				label: "GitHub",
				icon: IconGithub,
			},
		],
		metrics: [],
		featured: true,
	},

	{
		name: "FlashCard",
		githubSlug: "aymhmt/FlashCard",
		released: "2024-11-23",
		description: "English flash card app.",
		links: [
			{
				href: "https://github.com/aymhmt/FlashCard",
				label: "GitHub",
				icon: IconGithub,
			},
		],
		metrics: [],
		featured: true,
	},
];

export const certificate = [
	{
		title: "BTK Akademi React",
		description: "I have reached the end of another enjoyable program. By learning React and Redux, I have earned the right to receive this certificate.",
		recipientName: "Muhammet Ay",
		filePath: "https://drive.google.com/file/d/1IYhTrsynCHA6WKuih6POPfmXDV5ThpGW/view?usp=sharing",
		metrics: [],
		featured: true,
	},

	{
		title: "Turkcell Asp.net Core MVC",
		description: "I have completed the courses and earned the right to receive the ASP.NET Core MVC certificate.",
		recipientName: "Muhammet Ay",
		filePath: "https://drive.google.com/file/d/1ugHN-YklalRgTvLRuqdM6QTVXvYuvmpn/view?usp=sharing",
		metrics: [],
		featured: true,
	},

	{
		title: "BTK Akademi A2 English",
		description: "I have completed the A2 level course, built a strong foundation in English, and earned the right to receive this certificate",
		recipientName: "Muhammet Ay",
		filePath: "https://drive.google.com/file/d/1M_sFbLpMSQTDkv1emoLgw4J4COQs2hR1/view?usp=sharing",
		metrics: [],
		featured: true,
	},
];
