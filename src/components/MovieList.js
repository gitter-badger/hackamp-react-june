import React from 'react';
import PropTypes from 'prop-types';
import {Movie} from './Movie';

export const MovieList = ({movies, navClosed, selectMovie}) => {
  let className = 'gallery';

  if (!navClosed) {
    className += ' filter-is-visible';
  }

  return (
    <section className={className}>
      {movies.map(movie =>
        <Movie selectMovie={selectMovie} key={movie.id} data={movie} />
      )}
    </section>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  navClosed: PropTypes.bool.isRequired,
  selectMovie: PropTypes.func.isRequired
};
