import React, {Component} from 'react';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {MovieDetail} from './components/MovieDetail';

export class App extends Component {
  state = {
    selectedMovie: null
  };

  selectMovie = movieId => {
    this.setState({selectedMovie: movieId});
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.selectedMovie
          ? <MovieDetail
              selectMovie={this.selectMovie}
              movieId={this.state.selectedMovie}
            />
          : <Main selectMovie={this.selectMovie} />}
      </div>
    );
  }
}
