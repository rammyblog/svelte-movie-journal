<script>
  import MovieInput from "./MovieInput.svelte";
  import MovieList from "./MovieList.svelte";
  import Search from "./Search.svelte";
  import { movies } from "./stores";

  const submitMovie = ({ detail }) => {
    movies.add(detail.movie);
  };

  const clearSearch = () => {
    movies.clearSearch();
  };

  const search = ({ detail }) => {
    const { searchTerm } = detail;
    movies.search(searchTerm);
  };
</script>

<div class="main">
  <h1>Movie Journal</h1>
  <Search on:clearSearch={clearSearch} on:search={search} />
  <MovieInput on:submitMovie={submitMovie} />
  <MovieList movies={$movies} />
</div>

<style>
  .main {
    text-align: center;
    padding: 1em;
    margin: auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
