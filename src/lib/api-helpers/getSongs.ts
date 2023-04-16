export async function getSongs() {
  const songs = await (await fetch("http://localhost:5238/Song")).json();
  return songs;
}
