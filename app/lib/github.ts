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

// Repos de collaboration connus — à compléter manuellement
const COLLABORATION_REPOS = [
  "mishat19/application-metro",
];

interface GitHubEvent {
  type: string;
  repo: { name: string };
}

export async function getGitHubRepos(username: string): Promise<GitHubRepo[]> {
  // 1. Repos owned
  const ownedRes = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=public`,
    FETCH_OPTS
  );
  const owned: GitHubRepo[] = ownedRes.ok ? await ownedRes.json() : [];
  const ownedFiltered = owned.filter((r) => r.name !== username);
  const ownedIds = new Set(ownedFiltered.map((r) => r.id));

  // 2. Repos externes : Events API (activité récente) + liste statique
  const eventsRes = await fetch(
    `https://api.github.com/users/${username}/events/public?per_page=100`,
    FETCH_OPTS
  );
  const events: GitHubEvent[] = eventsRes.ok ? await eventsRes.json() : [];

  const seen = new Set<string>(COLLABORATION_REPOS);
  const externalNames = [...COLLABORATION_REPOS];

  const CONTRIBUTION_EVENTS = new Set(["PushEvent", "CreateEvent", "PullRequestEvent"]);
  for (const event of events) {
    if (!CONTRIBUTION_EVENTS.has(event.type)) continue;
    const owner = event.repo.name.split("/")[0];
    if (owner !== username && !seen.has(event.repo.name)) {
      seen.add(event.repo.name);
      externalNames.push(event.repo.name);
    }
  }

  // 3. Fetch les détails de chaque repo externe
  const collabRepos = (
    await Promise.all(
      externalNames.map((name) =>
        fetch(`https://api.github.com/repos/${name}`, FETCH_OPTS)
          .then((r) => (r.ok ? (r.json() as Promise<GitHubRepo>) : null))
          .catch(() => null)
      )
    )
  )
    .filter((r): r is GitHubRepo => r !== null && !ownedIds.has(r.id))
    .map((r) => ({ ...r, isCollaboration: true }));

  return [...ownedFiltered, ...collabRepos].sort(
    (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
  );
}
