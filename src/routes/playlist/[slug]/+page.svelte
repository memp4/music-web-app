<script lang="ts">
  import type { PageData } from "./$types";
  import MusicItem from "./MusicItem.svelte";

  export let data: PageData;
</script>

<div class="header">
  <a href="/playlist">{"<"}</a>
  <h1>Playlist</h1>
</div>
<div class="container">
  <h2>{data.name}</h2>
  <ul class="music-list">
    {#each data.songs as song (song.id)}
      <li>
        <MusicItem title={song.name} artist={song.artist} />
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .header {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-left: 40px;
    a {
      font-size: 36px;
      border-radius: 100%;
      padding: 6px 16px;
      text-decoration: none;

      &:hover {
        background-color: #b9eddd;
        cursor: pointer;
      }
    }
  }
  .container {
    margin: 0 120px;
  }
  .music-list {
    list-style: decimal;
  }
</style>
