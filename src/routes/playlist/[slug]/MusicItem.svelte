<script lang="ts">
  import { currentSong } from "$lib/stores/music";

  export let song: any;
</script>

<div class="song-item" on:click={() => currentSong.set(song)}>
  <div class="title">{song.name}</div>
  <div class="artist">{song.artist}</div>
</div>

<style>
  .song-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 8px;
    width: 320px;
    height: 60px;
    border-radius: 8px;
  }
  .song-item:hover {
    background-color: #b9eddd;
    cursor: pointer;
  }
  .title {
    font-size: 24px;
  }
  .artist {
    font-size: 18px;
  }
</style>
