import React from 'react'

const Movies = ({movies, deleteMovie}) => {

    const movieList = movies.length ? (
        movies.map(movie => {
            return (
                <div className="collection-item" key={movie.id}>
                    <span onClick={() => {deleteMovie(movie.id)}}>{movie.content}</span>
                </div>
            )
        })
    ) : (
        <p className='center'>You don't have any movies you want to watch!</p>
    )
    return (
        <div className='movies collection'>
            {movieList}
        </div>
    )
}

export default Movies