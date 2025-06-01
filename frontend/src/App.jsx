import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  const movieNumber = 1;

  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard movie={{title: "Joker", release_date: "2019"}}/>
      ) : (
       <MovieCard movie={{title: "A Working Man", release_date: "2025"}}/>
      )}
    </>
  )
}

export default App
