<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>Playlist</h1>
<h2>{data.name}</h2>
<ul>
  {#each data.songs as song (song.id)}
    <li>{song.name}</li>
  {/each}
</ul>
