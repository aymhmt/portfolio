"use client";

import { Container } from "@/components/blocks/container";

export default function About() {
	return (
		<Container className="mt-16">
			<div className="max-w-2xl">
				<h1 className="tracking-tight text-5xl">About</h1>
				<div className="pro text-muted-foreground text-balance">
					<p className="mt-2">
						Here you can find the major updates and changes to my life.
					</p>
				</div>
			</div>
		</Container>
	);
}
