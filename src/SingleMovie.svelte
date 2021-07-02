<script>
  import MovieInput from "./MovieInput.svelte";
  import { movies } from "./stores";

  export let movie;

  let displayEdit = false;

  const editMovie = ({ detail }) => {
    movies.edit(detail.movie);
    displayEdit = false;
  };
  const deleteMovie = (movie) => {
    if (window.confirm(`Do you really want delete ${movie.title}?`)) {
      movies.delete(movie);
    }
  };
</script>

<div class="movie__details">
  <h3>{movie.title}</h3>
  <p>Your rating: {movie.rating}</p>

  <div class:d-none={!displayEdit}>
    <MovieInput
      title={movie.title}
      rating={movie.rating}
      edit={true}
      id={movie.id}
      on:editMovie={editMovie}
    />
  </div>
  <div>
    <button class="btn btn-blue" on:click={() => (displayEdit = !displayEdit)}
      >{displayEdit ? "Cancel" : "Edit"}</button
    >
    <button class="btn btn-red" on:click={() => deleteMovie(movie)}
      >Delete</button
    >
  </div>
</div>

<style>
  .movie__details {
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    width: 500px;
    margin: auto;
    max-width: 100%;
  }
  .btn {
    min-width: 60px;
    border-radius: 5px;
    height: 100%;
    cursor: pointer;
  }

  .btn-blue {
    background-color: rgb(76, 76, 196);
    color: #fff;
  }

  .btn-red {
    background-color: rgb(194, 58, 58);
    color: #fff;
  }
  .d-none {
    display: none;
  }
  .d-block {
    display: block;
  }
</style>
