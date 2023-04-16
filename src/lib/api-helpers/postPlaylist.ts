import { playlists } from "$lib/stores/music";

export async function postPlaylist(playlistName: string, songs: string[]) {
  const data = {
    playlistName,
  };
  const response = await fetch(
    "http://localhost:5238/Playlist?" + new URLSearchParams(data),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(songs),
    }
  );
  const newPlaylists = await response.json();
  playlists.set(newPlaylists);
}
