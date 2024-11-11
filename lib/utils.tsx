import GiderimLogo from "@/components/blocks/giderim-logo";
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
		event: "Turkey",
		title: "ME",
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
		event: "Turkey",
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
		],
	},
	{
		date: "2022-07-08",
		event: "Turkey",
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
];
