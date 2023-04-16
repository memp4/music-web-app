<script lang="ts">
  import { currentSong } from "$lib/stores/music";
  let check: unknown[];
  currentSong.subscribe((value) => {
    check = value;
  });
</script>

<slot />

<div class="player">
  <div class="play-buttons">
    <button on:click={() => console.log(check)}>Play back</button>
    <button on:click={() => console.log(check)}>Play</button>
    <button on:click={() => console.log(check)}>Play next</button>
  </div>
</div>

<style lang="scss">
  .player {
    position: fixed;
    bottom: 0;
    height: 120px;
    width: 100%;
    background-color: #FA9884;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .play-buttons {
    display: flex;
    gap: 10px;

    button {
      font-size: 20px;
    }
  }
</style>
