import { observable, action, computed } from 'mobx';

export class MoviesStore {

  @observable isLoading = false;
  @observable moviesRegistry = observable.map();
  @observable totalMovies = 0;

  @computed get movies() {
    return this.moviesRegistry.values();
  };

  @action loadMovies() {
    this.isLoading = true;
    return fetch('https://ghibliapi.herokuapp.com/films').then((res) => {
      return res.json();
    }).then((resp) => {
      action((movies) => {
        this.moviesRegistry.set(movies, movies);
        return movies;
      });
    }).finally(action(() => { this.loading = false; }));
  }

}

export default new MoviesStore();
