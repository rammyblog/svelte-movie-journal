<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let title = "";
  let rating = 1;

  const submitMovie = () => {
    if (title) {
      dispatch("submitMovie", {
        movie: { title, rating },
      });
      title = "";
      rating = 1;
    }
  };
</script>
<div class="main">

    <form on:submit|preventDefault={submitMovie}>
      <input placeholder="Movie Title" type="text" bind:value={title} />
      <select bind:value={rating}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button disabled={!title}>Submit</button>
    </form>
</div>

<style>
.main{
    width:100%
}
</style>
