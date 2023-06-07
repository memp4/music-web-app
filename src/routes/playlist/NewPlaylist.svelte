<script lang="ts">
  import { getSongs } from "$lib/api-helpers/getSongs";
  import { postPlaylist } from "$lib/api-helpers/postPlaylist";
  import Modal from "$lib/components/Modal.svelte";
  import MultiSelect from "$lib/components/MultiSelect.svelte";

  let showModal = false;

  let songs = getSongs();
  let playlistName: string;
  let selectedSongs: string[];

  const createPlaylist = () => {
    postPlaylist(playlistName, selectedSongs);
  };
</script>

<article class="playlist">
  <span class="cover" on:click={() => (showModal = true)}>+</span>
  <span class="title">New Playlist</span>
</article>
<Modal bind:showModal>
  <span slot="header">Create new playlist</span>
  <div class="modal-body">
    <div class="playlist-name">
      <label for="playlist-name">Name for new playlist</label>
      <input type="text" id="playlist-name" bind:value={playlistName} />
    </div>
    {#await songs}
      <p>...Loading</p>
    {:then songs}
      <MultiSelect id="lang" bind:value={selectedSongs}>
        {#each songs as song (song.id)}
          <option value={song.name}>{song.name}</option>
        {/each}
      </MultiSelect>
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
  <button class="submit" on:click={createPlaylist}>Submit</button>
</Modal>

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
