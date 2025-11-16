import { GitHubStars } from "@/components/github-stars";
import { SOURCE_CODE_GITHUB_REPO } from "@/config/site";

async function getStargazerCount(repo = SOURCE_CODE_GITHUB_REPO) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 86400 }, // Cache for 1 day (86400 seconds)
    });

    if (!response.ok) {
      return 0;
    }

    const json = await response.json();
    return Number(json?.stargazers_count) || 0;
  } catch {
    return 0;
  }
}

export async function GithubRepoStarsFetch({
  repo = SOURCE_CODE_GITHUB_REPO,
}: {
  repo?: string;
}) {
  const stargazersCount = await getStargazerCount(repo);

  return <GitHubStars repo={repo} stargazersCount={stargazersCount} />;
}
