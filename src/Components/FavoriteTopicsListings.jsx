import 'react'
import FavoriteTopicsHero from './FavoriteTopicsHero'
import blogggs from '../blogggs.json'

console.log(blogggs)
const forYou = blogggs.slice(0, 1)

const FavoriteTopicsListings = () => {
  return (
      <div key={''} className='flex flex-col  '> 
                    
          {
              forYou.map((bloggg) => (
                  <FavoriteTopicsHero key={bloggg.id} bloggg={ bloggg} />
              ))
              
          }
                                    
        </div>
        
          
  )
}

export default FavoriteTopicsListings