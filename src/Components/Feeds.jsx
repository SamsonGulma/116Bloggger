import 'react'
import '../assets/Styles/Feeds.css'
import PeopleTrendYourtopic from './PeopleTrendYourtopic'
import Heros from './FavoriteTopicsHero'
import AllTheRestBlogggsHero from './AllTheRestBlogggsHero'


const Feeds = () => {
  return (
      <div className='feeds_and_blogggs_container mt-[10vh] ml-[5vw] pt-[7vh] pl-[5vw] border border-black grid grid-cols-3'>
          
        <div className='all_blogggs_for_you grid grid-cols-3 row-start-1 col-start-1 row-span-2 col-span-2'>
              
          <div className='your_favorite_topics  col-start-1 row-span-1'> <Heros/> </div>

            <div className='all_the_rest_blogggs '>
                <AllTheRestBlogggsHero/>
              </div>
              
          </div>


          <div className=''>
            <PeopleTrendYourtopic />
              
          </div>

    </div>
      
  )
}

export default Feeds