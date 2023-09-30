import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';
// c20afbac     This is API key.......
const API_URL = 'https://www.omdbapi.com?apikey=c20afbac'
const movie1  = {
  "Title": "Iron Man 3",
  "Year": "2013",
  "imdbID": "tt1300854",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"
}
function App() {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL} &s=${title}`)
    const data = await response.json();
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('iron man')
  }, []);
  return (
   <div className='app'>
      <h1>Movie Land</h1>
      <div className='search'>
        {/* <input type="text" placeholder='Search for movie' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /> */}

        <input type="text" placeholder='Search For Movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={searchIcon} alt="Search" onClick={() =>searchMovies(searchTerm)} />
      </div>
      {
        movies.length>0
        ? (
      <div className="container">
        {
         movies.map((movie) =>(
          <MovieCard movie={movie}/>
         )
         ) 
        }
      </div>
        ) : (
          <div className="empty">
            <h2>No Movies To Display! Please Watch Our Recomanded Videos</h2>
          </div>
        )
      }
   </div>
  );
}

export default App;
