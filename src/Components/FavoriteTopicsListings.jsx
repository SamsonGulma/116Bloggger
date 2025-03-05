import 'react'
import blogggs from '../blogggs.json'
import FavoriteTopicsHero from './FavoriteTopicsHero'


const FavoriteTopicsListings = () => {
  return (
      <div key={''} className='flex flex-col  shadow-2xl rounded-2xl border-1 border-gray-200'> 
                    
          {
              blogggs.map((bloggg) => (
                  <FavoriteTopicsHero key={bloggg.id} bloggg={bloggg} />
              ))
          }
                                    
        </div>
        
          
  )
}

export default FavoriteTopicsListings