"use client";
import { CertificateCard } from "@/components/blocks/certificate-card";
import { certificate } from "@/lib/utils";
import { Container } from "@/components/blocks/container";

export default function About() {
	return (
		
		<Container className="mt-16">
			<meta name="google-adsense-account" content="ca-pub-5886958611063336"></meta>
			<div className="max-w-2xl">
				<h1 className="tracking-tight text-5xl">About</h1>
				<div className="pro text-muted-foreground text-balance">
					<p className="mt-2">
						Here you can find the major updates and changes to my life.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-4 max-h-md"> 
					{certificate.map((cert, index) => (
						<CertificateCard
							key={index}
							title={cert.title}
							description={cert.description}
							recipientName={cert.recipientName}
							filePath={cert.filePath}
						/>
					))}
				</div>
			</div>
		</Container>
	);
}

