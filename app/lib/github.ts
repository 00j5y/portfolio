export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=public`,
    {
      cache: "force-cache",
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  if (!res.ok) return [];

  const repos: GitHubRepo[] = await res.json();

  return repos.filter((r) => r.name !== "00j5y");
}
