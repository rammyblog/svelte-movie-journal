<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let searchTerm = "";

  const onKeyChange = () => {
    if (searchTerm) {
      dispatch("search", { searchTerm });
    } else {
      dispatch("clearSearch", {});
    }
  };
</script>

<input
  placeholder="Search Your movies"
  bind:value={searchTerm}
  on:keyup={onKeyChange}
/>

<style>
  input {
    /* width: 100%; */
  }
</style>
