import {writable} from 'svelte/store'


function createMovie(){
	const { subscribe, set, update } = writable(localStorage.getItem("movies")
    ? JSON.parse(localStorage.getItem("movies"))
    : []);

    return {
        subscribe,
        add: (movie) => update(movies => {
            const updatedMovies = [...movies, movie];
            localStorage.setItem("movies", JSON.stringify(updatedMovies));
            return updatedMovies;
        }),
        edit: (movie) => update((movies) => {
            const { id, title, rating } = movie;
            const tempMovies = [...movies];
            const foundMovie = tempMovies.find((m) => m.id === id);
            if (foundMovie) {
                foundMovie.title = title;
                foundMovie.rating = rating;
                localStorage.setItem("movies", JSON.stringify(tempMovies));
            }
            return tempMovies;
        
        }),
        delete: (movie) => update(movies=> {
            const { id } = movie;
           const tempMovies = [...movies].filter((m) => m.id !== id);
            localStorage.setItem("movies", JSON.stringify(tempMovies));
            return tempMovies; 
        }),
        // search = () => update(movies => {
        //     const tempMovies = localStorage.getItem("movies")
        //     ? JSON.parse(localStorage.getItem("movies"))
        //     : [];
        //   // movies = tempMovies.filter((movie) =>
        //   //   movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        //   // );
        // })
    };
}
export const movies = createMovie()
