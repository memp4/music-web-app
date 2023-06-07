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

<!-- {:then songs}
      <MultiSelect id="lang" bind:value={selectedSongs}>
        {#each songs as song (song.id)}
          <option value={song.name}>{song.name}</option>
        {/each}
      </MultiSelect>
    {:catch error} -->

<dialog {open}>
  <article style="width: 500px;">
    <header>
      <a href="#" class="close" on:click={closeFunc} />
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

<style lang="scss">
  .playlist {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 196px;
    gap: 12px;

    &:hover {
      cursor: pointer;
    }
  }

  .cover {
    width: 196px;
    height: 196px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 96px;
    border: 1px solid cadetblue;
  }
  .title {
    font-size: large;
  }
  .modal-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .playlist-name {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 24px;
    input {
      padding: 6px;
      font-size: 24px;
    }
  }

  .submit {
    margin-top: 24px;
    font-size: 20px;
    padding: 6px;
  }
</style>
