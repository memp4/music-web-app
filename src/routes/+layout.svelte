<script lang="ts">
  import { currentSong } from "$lib/stores/music";
  import { getFile } from "$lib/api-helpers/getFile";

  let check: any;
  $: src = getFile(`http://localhost:5238/Song/${check?.song}`);

  currentSong.subscribe((value) => {
    check = value;
  });
</script>

<main class="container">
  <slot />
</main>

<div class="player">
  <div class="play-buttons">
    {#await src}
      <p>...Loading</p>
    {:then src}
      <audio {src} controls />
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
</div>

<style lang="scss">
  .player {
    position: fixed;
    bottom: 0;
    height: 120px;
    width: 100%;
    background-color: var(--muted-border-color);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
