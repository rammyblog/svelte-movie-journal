<script>
  import SingleMovie from "./SingleMovie.svelte";
  export let movies;
</script>

{#each movies as movie (movie.id)}
  <SingleMovie {movie} />
{:else}
  <p>No movie yet!</p>
{/each}

<style>
</style>
