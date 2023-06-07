<script lang="ts">
  import type { PageData } from "./$types";
  import NewPlaylistModal from "./NewPlaylistModal.svelte";

  export let data: PageData;

  let isOpenModal = false;
</script>

<h1>This is main page</h1>
<div class="playlists">
  {#each data.playlists as playlist (playlist.id)}
    <article>
      <a href={`/playlist/${playlist.id}`}>
        <span class="cover" />
      </a>
      <footer>
        <a href={`/playlist/${playlist.id}`}>
          <h4>{playlist.name}</h4>
        </a>
      </footer>
    </article>
  {/each}
  <article>
    <p class="add-icon" on:click={() => (isOpenModal = true)}>+</p>
    <footer>
      <h4 class="add-title">New Playlist</h4>
    </footer>
  </article>
  <NewPlaylistModal
    open={isOpenModal}
    closeFunc={() => (isOpenModal = false)}
  />
</div>

<style>
  .playlists {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    /* margin: 0 16px; */
  }
  .cover {
    display: flex;
    width: 196px;
    height: 196px;
    background-color: #d14d72;
  }
  .add-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 196px;
    height: 196px;
    border: solid 1px #d14d72;
    font-size: 96px;
  }
  .add-icon:hover {
    cursor: pointer;
  }
  .add-title:hover {
    cursor: pointer;
  }
</style>
