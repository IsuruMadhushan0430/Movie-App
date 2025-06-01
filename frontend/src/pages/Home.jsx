import React from 'react'
import MovieCard from '../components/MovieCard'
import {useState} from 'react'

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const movies = [
    {id: 1, title: 'Inception', release_year: "2010"},
    {id: 2, title: "Havoc", release_year: "2025"},
    {id: 3, title: "Uncharted", release_year: "2022"},
    {id: 4, title: "Parasite", release_year: "2019"},
    {id: 5, title: "Oppenheimer", release_year: "2023"},
    {id: 6, title: "Damsel", release_year: "2024"},
    {id: 7, title: "IF", release_year: "2024"},
    {id: 8, title: "The Fall Guy", release_year: "2024"}  
  ];

  const handleSearch = (e) => {
    e.preventDefault()
    alert(`Searching for: ${searchQuery}`);
  };
  return (
    <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input type='text'
                placeholder='Search for a movie...'
                className='search-input'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type='submit' className='search-button'>Search</button>
            </form>
        <div className='movie-grid'>
            {movies.map(
              (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id}/>
            )
          )}
        </div>
    </div>
  )
}

export default Home