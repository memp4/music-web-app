import { playlists } from "$lib/stores/music";
import type { PageLoad } from "./$types";

export const load = (async ({ params, fetch }) => {
  const playlist = await (
    await fetch(`http://localhost:5238/Playlist/${params.slug}`)
  ).json();
  console.log(playlist);
  return playlist;
}) satisfies PageLoad;
