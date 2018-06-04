import React from 'react';
import PropTypes from 'prop-types';
import filters from '../mocks/filters';
import {MovieList} from './MovieList';
import {SideBarFilters} from './SideBarFilters';
import {FilterMenu} from './FilterMenu';
import {movie} from '../types/movie';

export class Main extends React.Component {
  state = {
    filters,
    searchValue: null,
    navClosed: true,
    selectedFilter: 'All',
    counter: 0
  };

  selectTab = category => {
    this.setState({
      filters: filters.map(filter => {
        filter.selected = filter.category === category;
        return filter;
      }),
      selectedFilter: category
    });
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
  };

  updateCounter = counter => this.setState({counter});

  render() {
    const {filters, navClosed, selectedFilter, searchValue} = this.state;

    const {addToCart, isInCart, removeFromCart, movies} = this.props;

    return (
      <main className="main-content">

        <FilterMenu
          counter={this.state.counter}
          filters={filters}
          selectTab={this.selectTab}
          selectPage={this.props.selectMovie}
        />

        <MovieList
          updateCounter={this.updateCounter}
          removeFromCart={removeFromCart}
          addToCart={addToCart}
          isInCart={isInCart}
          selectMovie={this.props.selectMovie}
          movies={movies}
          selectedFilter={selectedFilter}
          searchValue={searchValue}
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
  movies: PropTypes.arrayOf(movie).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  selectMovie: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  isInCart: PropTypes.func.isRequired
};
