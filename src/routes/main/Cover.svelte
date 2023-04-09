<script lang="ts">
    export let title: string;
</script>

<div class="playlist">
    <span class="cover"></span>
    <span class="title">{title}</span>
</div>

<style>
    .playlist {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 196px;
        gap: 12px;
    }
    .cover {
        width: 196px;
        height: 196px;
        background-color: cadetblue;
    }
    .title {
        font-size: large;
    }
</style>