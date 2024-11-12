"use client";

import { cn } from "@/lib/utils";
import { useHover } from "@uidotdev/usehooks";
import Link from "next/link";
import type React from "react";

export function CertificateCard({
	title,
	description,
	recipientName,
	filePath,
	label = "View Certificate",
	debug = false,
	className,
}: {
	title: string;
	description: string;
	recipientName: string;
	filePath: string;
	className?: string,
	label?: string;
	debug?: boolean;
}): React.ReactElement {
	const [ref, hovering] = useHover();

	return (
		<Link
			href={filePath}
			target="_blank"
			ref={ref}
			className={cn(
				"group relative h-64 w-full cursor-pointer overflow-hidden border-zinc-900 dark:border-zinc-800 transition-all duration-500 hover:ring-3 ring-zinc-900/5 dark:ring-zinc-800",
				debug && "debug overflow-visible",
			)}
		>
			<div
				className={cn(
					"relative flex h-full w-full flex-col justify-between overflow-hidden p-10 rounded-3xl border-2",
					debug && "debug",
				)}
			>
				<div className="flex flex-col text-base transition-transform duration-500 group-hover:-translate-y-6">
					<span className="text-lg font-semibold">{title}</span>
					<span className="text-base text-muted-foreground">{description}</span>
					<span className="text-sm text-gray-500 mt-1">Recipient: {recipientName}</span>
				</div>

				<div className="pointer-events-none absolute -bottom-20 h-10 w-full text-base font-semibold transition-all duration-500 group-hover:-bottom-0">
					{label}
				</div>
			</div>
		</Link>
	);
}
