import { writable } from "svelte/store";

export const playlists = writable<unknown[]>();
export const currentSong = writable<unknown[]>();
