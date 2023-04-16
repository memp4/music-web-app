<script lang="ts">
  export let title: string;
  export let artist: string;
</script>

<div class="song-item">
    <div class="title">{title}</div>
    <div class="artist">{artist}</div>
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
    background-color: #B9EDDD;
    cursor: pointer;
  }
  .title {
    font-size: 24px;
  }
  .artist {
    font-size: 18px;
  }
</style>
