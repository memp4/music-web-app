<script lang="ts">
  import { getSongs } from "$lib/api-helpers/getSongs";
  import { postPlaylist } from "$lib/api-helpers/postPlaylist";

  export let open = false;
  export let closeFunc: () => void;

  let songs = getSongs();
  let playlistName: string;
  let selectedSongs: string[];

  const createPlaylist = () => {
    postPlaylist(playlistName, selectedSongs);
    closeFunc();
  };
</script>

<dialog {open}>
  <article style="width: 500px;">
    <header>
      <!-- svelte-ignore a11y-missing-content -->
      <a href="#close" class="close" on:click={closeFunc} />
      <h4>Create new playlist</h4>
    </header>
    <div>
      <label for="playlist-name">Name for a new playlist</label>
      <input
        type="text"
        name="plyalist-name"
        id="playlist-name"
        bind:value={playlistName}
      />
    </div>
    {#await songs}
      <p>...Loading</p>
    {:then songs}
      <details role="list">
        <summary aria-haspopup="listbox">Dropdown</summary>
        <!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
        <ul role="listbox">
          {#each songs as song (song.id)}
            <li>
              <label>
                <input
                  type="checkbox"
                  value={song.name}
                  bind:group={selectedSongs}
                />
                {song.name}
              </label>
            </li>
          {/each}
        </ul>
      </details>
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
    <footer>
      <button on:click={createPlaylist}>Create</button>
    </footer>
  </article>
</dialog>