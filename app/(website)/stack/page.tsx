import { Container } from "@/components/blocks/container";
import { ChangelogList } from "@/components/blocks/changelog-list";

export default function Notes() {
	return (
		<Container className="mt-16">
			<meta name="google-adsense-account" content="ca-pub-5886958611063336"></meta>
			<div className="max-w-2xl">
				<h1 className="tracking-tight text-5xl">Stack</h1>
				<div className="pro text-muted-foreground text-balance">
					<p className="mt-2">
					A few snapshots from my life.
					</p>
				</div>
			</div>
			<ChangelogList />
		</Container>
	);
}
