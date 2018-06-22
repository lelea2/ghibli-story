import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { inject, observer } from 'mobx-react';
import Movie from './Movie';

@inject('moviesStore')
@observer
class MoviesList extends Component {

  componentDidMount() {
    this.props.moviesStore.loadMovies();
  }

  render() {
    const movies = this.props.moviesStore.movies;
    return (
      <div className="container">
        {movies.map((movie) => {
          return (
            <Movie {...movie} key={movie.id} />
          );
        })}
      </div>
    );
  }
}

export default MoviesList;
