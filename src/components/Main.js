import React from 'react';
import PropTypes from 'prop-types';
import filters from '../mocks/filters';
import {MovieList} from './MovieList';
import {SideBarFilters} from './SideBarFilters';
import {FilterMenu} from './FilterMenu';
import movies from '../mocks/movies.json';
import {getGenreId, movieContainsGenre} from '../libs/utils';

export class Main extends React.Component {
  state = {
    movies,
    filters,
    searchValue: null,
    navClosed: true
  };

  selectTab = category => {
    this.setState({
      filters: filters.map(filter => {
        filter.selected = filter.category === category;
        return filter;
      })
    });
    this.filterMovies();
  };

  closeSideBar = () => {
    this.setState({
      navClosed: true
    });
  };

  openSideBar = () =>
    this.setState({
      navClosed: false
    });

  search = event => {
    this.setState({searchValue: event.target.value});
    this.filterMovies();
  };

  filterMovies() {
    const selectedFilter = this.state.filters.filter(f => f.selected)[0]
      .category;

    this.setState({
      movies: movies.filter(
        movie =>
          (selectedFilter === 'All' ||
            movieContainsGenre(movie, getGenreId(selectedFilter))) &&
          (!this.state.searchValue ||
            movie.title
              .toLowerCase()
              .includes(this.state.searchValue.toLowerCase()))
      )
    });
  }

  render() {
    const {movies, filters, navClosed} = this.state;

    return (
      <main className="main-content">

        <FilterMenu
          counter={this.state.movies.length}
          filters={filters}
          selectTab={this.selectTab}
        />

        <MovieList
          selectMovie={this.props.selectMovie}
          movies={movies}
          navClosed={navClosed}
        />

        <SideBarFilters
          navClosed={navClosed}
          closeSideBar={this.closeSideBar}
          onChange={this.search}
          openSideBar={this.openSideBar}
        />
      </main>
    );
  }
}

Main.propTypes = {
  selectMovie: PropTypes.func.isRequired
};
