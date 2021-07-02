<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let title = "";
  export let rating = 1;
  export let edit = false;
  export let id;

  const submitMovie = () => {
    if (title && !edit) {
      dispatch("submitMovie", {
        movie: { title, rating, id: Math.random() },
      });
      title = "";
      rating = 1;
    } else {
      dispatch("editMovie", {
        movie: { title, rating, id },
      });
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
  .main {
    width: 100%;
  }
</style>
