<script lang="ts">
  export let title: string;
  export let playlistId: string;
</script>

<a class="playlist" href={`/playlist/${playlistId}`}>
  <span class="cover" />
  <span class="title">{title}</span>
</a>

<style>
  .playlist {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 196px;
    gap: 12px;
    text-decoration: none;
    font-size: large;
    color: black;
  }
  .playlist:hover {
    cursor: pointer;
  }
  .cover {
    width: 196px;
    height: 196px;
    background-color: #D14D72;
  }
  .title {
    font-size: large;
  }
</style>
