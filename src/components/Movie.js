import React, { Component } from 'react';
import styles from './styles/movie.css';

class Movie extends Component {

  render() {
    const { props } = this;
    return (
      <div className="card" id={props.id}>
        <h2>{props.title}</h2>
        <div className="description">
          <p>{props.description}</p>
          <div className="sub">
            <div>Release date: {props.release_date}</div>
            <div>Score: {props.rt_score}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
