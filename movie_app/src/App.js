import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Movie from './Movie';


class App extends Component {
  state = {}

  componentDidMount() {
    this._getMovies();

  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id} summary={movie.summary}/>
    })
    return movies
  }


  _getMovies = async() => {
    const movies = await this._callApi(); 
    this.setState({
      movies
    })
  }

  _callApi = () => {
   return fetch('https://yts.am/api/v2/list_movies.json?sort by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1>영화 다운로드 BEST10</h1>
        <ul className="movie_list">
          {this.state.movies ? this._renderMovies() : 'Loading'}
        </ul>
      </div>
    );
  }
}

export default App;
