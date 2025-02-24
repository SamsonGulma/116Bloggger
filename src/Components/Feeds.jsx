import 'react'
import '../assets/Styles/Feeds.css'
import PeopleTrendYourtopic from './PeopleTrendYourtopic'
import Heros from './FavoriteTopicsHero'
import AllTheRestBlogggsHero from './AllTheRestBlogggsHero'


const Feeds = () => {
  return (
    <div className='feeds_and_blogggs_container mt-[10vh] ml-[5vw] pt-[7vh] pl-[5vw] border border-black grid grid-cols-3 grid-rows-2'>
          
        <div className='all_blogggs_for_you grid grid-cols-1 grid-row-2 row-start-1 col-start-1 row-span-2 col-span-2'>
            <div className='your_favorite_topics  col-start-1 col-end-1 row-start-1 row-span-1'> <Heros/> </div>
            <div className='all_the_rest_blogggs col-start-1 col-end-1 row-start-2 row-span-2'><AllTheRestBlogggsHero/></div>
        </div>

        <div className=''><PeopleTrendYourtopic /></div>

    </div>
      
  )
}

export default Feeds