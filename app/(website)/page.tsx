import { Container } from "@/components/blocks/container";
import { OpenSourceCard } from "@/components/blocks/opensource-card";
import { ProjectCard } from "@/components/blocks/project-card";
import { getGithubInfo } from "@/server/thirdparty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin } from "@fortawesome/free-brands-svg-icons";


export default async function Readme() {
	const githubResponse = await getGithubInfo();

	const last3weeks =
		githubResponse.data.viewer.contributionsCollection.contributionCalendar.weeks.slice(
			-3,
		);
	const last14days = last3weeks
		.flatMap((week) => week.contributionDays)
		.slice(-14);

	const githubFollowers = githubResponse.data.viewer.followers.totalCount;
	const githubStars = githubResponse.data.viewer.repositories.nodes.reduce(
		(acc, repo) => acc + repo.stargazerCount,
		0,
	);

	return (
		<>
			<Container className="mt-9">
				<h1 className="tracking-tight text-4xl sm:text-5xl">
					Muhammet Ay
					<span className="text-muted-foreground font-title font-extralight text-3xl sm:text-4xl block text-balance">
						Computer Engineer & Developer
					</span>
				</h1>
				<div className="pro text-muted-foreground text-balance">
					<p className="mt-6">
					Hello. I’m an excited and curious developer from Turkey. Recently, my curiosity has been shifting towards the web and mobile world, so I’m working on web and mobile development.
					</p>
					<p>
					I also have an interest in other areas of the IT world, and I’ve had some experience with all of them. I plan to explore data and AI fields in the future. In short, I’m a developer and an individual who is passionate about technology and eager to learn.
					</p>
				</div>
			</Container>
			<Container className="mt-24 md:mt-20">
				<h2 className="text-3xl">Spotlight</h2>
				<p className="text-muted-foreground mb-8 mt-3">
				My repository and links.
				</p>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
					<ProjectCard
						title="Linkedin"
						icon={<FontAwesomeIcon icon={faLinkedin} />
					}
						description="The LinkedIn page with
						my corporate identity."
						link="https://www.linkedin.com/in/muhammet-ay-067701274/"
					/>
					<OpenSourceCard
						link="https://github.com/aymhmt"
						contributions={last14days}
						repoStats={githubResponse.data.viewer.repositories.nodes}
						totalStars={githubStars}
					/>
				</div>
			</Container>
			<Container className="mt-24 md:mt-20">
				<div className="mx-auto max-w-2xl gap-y-20">
					<div className="flex flex-col gap-3">
						<h2 className="text-3xl sm:text-4xl mb-1">Career</h2>
						<div className="flex flex-col gap-8">
							<p className="text-muted-foreground">
								Overall I have{" "}
								<span className="font-semibold">
									2+ years of experience
								</span>{" "}
								in software development.
							</p>

						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
