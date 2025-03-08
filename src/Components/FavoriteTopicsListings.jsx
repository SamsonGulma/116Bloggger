import 'react'
import FavoriteTopicsHero from './FavoriteTopicsHero'
import blogggs from '../blogggs.json'

console.log(blogggs)

const FavoriteTopicsListings = ({isHome=false}) => {
  const pennyblogggs = isHome ? blogggs.slice(0, 4) : blogggs
  return (
      <div key={''} className='flex flex-col  '> 
          <h1 className='text-2xl font-semibold pb-7'>Penny Blogggs</h1>
          {
              pennyblogggs.map((bloggg) => (
                  <FavoriteTopicsHero key={bloggg.id} bloggg={bloggg} />
              ))
              
          }
                                    
        </div>
        
          
  )
}

export default FavoriteTopicsListings