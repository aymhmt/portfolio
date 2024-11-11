"use server";

import { unstable_cache as cache } from "next/cache";

const CACHE_DURATION = 3600 * 1.5; 

const USE_MOCK_DATA_FOR_DEVELOPMENT = true;

const DEFAULT_GITHUB_RESPONSE = {
  data: {
    viewer: {
      login: "aymuhammet",
      repositories: {
        totalCount: 5,
        nodes: [
          {
            nameWithOwner: "aymuhammet/Repo1",
            name: "Repo1",
            description: "A sample repository",
            forkCount: 2,
            stargazerCount: 10,
            createdAt: "2022-01-01T00:00:00Z",
            updatedAt: "2023-01-01T00:00:00Z"
          },
        ]
      },
      followers: {
        totalCount: 1500
      },
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: 100,
          weeks: [
            {
              contributionDays: [
                { contributionCount: 3, date: "2024-01-01" },
              ]
            }
          ]
        }
      }
    }
  }
};

export const getGithubInfo = cache(
  async (): Promise<Externals.Github.ApiResponse> => {
    try {
      if (process.env.NODE_ENV === "development" && USE_MOCK_DATA_FOR_DEVELOPMENT) {
        return DEFAULT_GITHUB_RESPONSE;
      }

      const query = `
        {
          viewer {
            login
            repositories(first: 20, affiliations: OWNER, isFork: false, orderBy: {field: STARGAZERS, direction: DESC}) {
              totalCount
              nodes {
                nameWithOwner
                name
                description
                forkCount
                stargazerCount
                createdAt
                updatedAt
              }
            }
            followers {
              totalCount
            }
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `;

      console.log("API HIT: github");
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        body: JSON.stringify({ query }),
        next: { revalidate: CACHE_DURATION },
      });

      if (!res.ok) {
        throw new Error(`GitHub API request failed with status ${res.status}`);
      }

      return await res.json();
    } catch (error) {
      console.error("GitHub API error", error);
      return DEFAULT_GITHUB_RESPONSE; 
    }
  },
  ["ned-im-github-data"],
  { revalidate: CACHE_DURATION }
);

