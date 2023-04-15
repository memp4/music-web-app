import type { PageLoad } from "./$types";
import { playlists } from "$lib/stores/music";

export const load = (async ({ fetch, params }) => {
  const response = await fetch("http://localhost:5238/Playlist");
  const result = await response.json();
  playlists.set(result);
  return { playlists: result };
}) satisfies PageLoad;
