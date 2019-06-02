import React, {Component} from 'react';
import Movies from './Movies'

class App extends Component {
  state = {
    movies: [
      {id: 1, content: "Lord of The Rings"},
      {id: 2, content: "Rambo: Last Blood"}
    ]
  }
  deleteMovie = (id) => {
    const movies = this.state.movies.filter(movie => {
      return movie.id !== id
    })
    this.setState({
      movies
    })
  }
  render() {
    return (
          <div className="movie-app container">
            <h1 className='center blue-text'>Movies to watch</h1>
            <Movies movies={this.state.movies} deleteMovie={this.deleteMovie}/>
          </div>
      );    
  }
}

export default App;
