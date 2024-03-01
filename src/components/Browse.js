import Header from './Header'
import UseNowPlayingMovies from '../hooks/UseNowPlayingMovies'

const Browse = () => {
  
  UseNowPlayingMovies();

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse