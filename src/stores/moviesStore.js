import { observable, action, computed } from 'mobx';

export class MoviesStore {

  @observable isLoading = false;
  @observable moviesRegistry = observable.map();
  @observable totalMovies = 0;

  @computed get movies() {
    return this.moviesRegistry.values();
  };

  clear() {
    this.moviesRegistry.clear();
  }

  @action loadMovies() {
    this.isLoading = true;
    return fetch('https://ghibliapi.herokuapp.com/films').then((res) => {
      return res.json();
    }).then(action((movies) => {
      // console.log(movies);
      movies.forEach((movie) => {
        this.moviesRegistry.set(movie.id, movie);
      });
      return movies;
    })).finally(action(() => { this.loading = false; }));
  }

}

export default new MoviesStore();
