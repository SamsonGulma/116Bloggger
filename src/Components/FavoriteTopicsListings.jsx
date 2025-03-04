import 'react'
import blogggs from '../blogggs.json'
import FavoriteTopicsHero from './FavoriteTopicsHero'


const FavoriteTopicsListings = () => {
  return (
      <div>
          <FavoriteTopicsHero key={blogggs.id} blogggs={blogggs} />
    </div>
  )
}

export default FavoriteTopicsListings