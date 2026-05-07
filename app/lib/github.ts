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
  isCollaboration?: boolean;
}

const HEADERS = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

const FETCH_OPTS = {
  cache: "force-cache" as const,
  next: { revalidate: 3600 },
  headers: HEADERS,
};

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  const [ownedRes, contribRes] = await Promise.all([
    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=public`,
      FETCH_OPTS
    ),
    fetch(
      `https://api.github.com/search/repositories?q=contributor:${username}+fork:false+is:public&sort=updated&per_page=20`,
      FETCH_OPTS
    ),
  ]);

  const owned: GitHubRepo[] = ownedRes.ok ? await ownedRes.json() : [];
  const ownedFiltered = owned.filter((r) => r.name !== username);
  const ownedIds = new Set(ownedFiltered.map((r) => r.id));

  const contribData = contribRes.ok ? await contribRes.json() : { items: [] };
  const collabs: GitHubRepo[] = ((contribData.items ?? []) as GitHubRepo[])
    .filter((r) => !ownedIds.has(r.id))
    .map((r) => ({ ...r, isCollaboration: true }));

  return [...ownedFiltered, ...collabs].sort(
    (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );
}
