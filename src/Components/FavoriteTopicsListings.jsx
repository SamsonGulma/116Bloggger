import 'react'
import blogggs from '../blogggs.json'
import FavoriteTopicsHero from './FavoriteTopicsHero'


const FavoriteTopicsListings = () => {
  return (
      <div>
          {
              blogggs.map((bloggg) => (
                  <FavoriteTopicsHero key={bloggg.id} bloggg={bloggg} />
              ))
          }
    </div>
  )
}

export default FavoriteTopicsListings