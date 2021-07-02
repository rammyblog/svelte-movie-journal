<script>
  import MovieInput from "./MovieInput.svelte";
  import MovieList from "./MovieList.svelte";
  import Search from "./Search.svelte";

  let movies = localStorage.getItem("movies")
    ? JSON.parse(localStorage.getItem("movies"))
    : [];
  const submitMovie = ({ detail }) => {
    const updatedMovies = [...movies, detail.movie];
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
    movies = updatedMovies;
  };

  const clearSearch = () => {
    localStorage.getItem("movies")
      ? JSON.parse(localStorage.getItem("movies"))
      : [];
  };

  const search = ({ detail }) => {
    const { searchTerm } = detail;
    const tempMovies = localStorage.getItem("movies")
      ? JSON.parse(localStorage.getItem("movies"))
      : [];
    movies = tempMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
</script>

<div class="main">
  <h1>Movie Journal</h1>
  <Search on:clearSearch={clearSearch} on:search={search} />
  <MovieInput on:submitMovie={submitMovie} />
  <MovieList {movies} />
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
