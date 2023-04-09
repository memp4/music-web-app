import type { PageLoad } from "./$types";

export const load = (async ({ fetch, params }) => {
  const response = await fetch("http://localhost:5238/Playlist");
  const result = await response.json();
  return { playlists: result };
}) satisfies PageLoad;
