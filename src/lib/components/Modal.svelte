<script lang="ts">
  export let showModal: boolean; // boolean

  let dialog: HTMLDialogElement; // HTMLDialogElement
  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <div on:click|stopPropagation>
    <div class="header">
      <slot name="header" />
      <button class="close" on:click={() => dialog.close()}
        >x</button
      >
    </div>
    <hr />
    <slot />
    <!-- svelte-ignore a11y-autofocus -->
  </div>
</dialog>

<style>
  dialog {
    max-width: 32em;
    border-radius: 0.2em;
    border: none;
    padding: 0;
    min-height: 700px;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  dialog > div {
    padding: 1em;
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  button {
    display: block;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 36px;
    gap: 12px;
  }

  .close {
    font-size: 48px;
  }
</style>
