<script lang="ts">
  import Modal from "$lib/components/Modal.svelte";

  let showModal = false;
</script>

<div class="playlist">
  <span class="cover" on:click={() => (showModal = true)}>+</span>
  <span class="title">New Playlist</span>
</div>
<Modal bind:showModal>
  <span slot="header">Create new modal</span>
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
</style>
