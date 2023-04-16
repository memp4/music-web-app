<script lang="ts">
  import type { PageData } from "./$types";
  import Cover from "./Cover.svelte";
  import NewPlaylist from "./NewPlaylist.svelte";

  export let data: PageData;

  console.log(data);
</script>

<h1>This is main page</h1>
<div class="playlists">
  {#each data.playlists as playlist (playlist.id)}
    <Cover title={playlist.name} playlistId={playlist.id} />
  {/each}
  <NewPlaylist />
</div>

<style>
  :global(body) {
    background-color: #FEF2F4;
  }
  .playlists {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
</style>
