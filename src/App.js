import React, {Component} from 'react';
import Movies from './Movies'
import AddMovie from './AddMovie'

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
  addMovie = (movie) => {
    movie.id = Math.random()
    let movies = [...this.state.movies, movie]
    this.setState({
      movies
    })
  }
  render() {
    return (
          <div className="movie-app container">
            <h1 className='center blue-text'>Movies to watch</h1>
            <Movies movies={this.state.movies} deleteMovie={this.deleteMovie}/>
            <AddMovie addMovie={this.addMovie}/>
          </div>
      );    
  }
}

export default App;
