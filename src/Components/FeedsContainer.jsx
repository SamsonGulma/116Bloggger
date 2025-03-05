import 'react'
import '../assets/Styles/FeedsContainer.css'
import PeopleTrendYourtopic from './PeopleTrendYourtopic'
import FavoriteTopicsListings from './FavoriteTopicsListings'
import AllTheRestBlogggsHero from './AllTheRestBlogggsHero'


const Feeds = () => {
  return (
    <div className='feeds_and_blogggs_container mt-[10vh] ml-[5vw] pt-[7vh] pl-[5vw] grid grid-cols-3 grid-rows-2 w-screen'>
        <div className='all_blogggs_for_you flex flex-col row-start-1 col-start-1 row-span-2 col-span-2'>
          <div className='your_favorite_topics  col-start-1 col-end-1 row-start-1 row-span-1'> <FavoriteTopicsListings /> </div>
          <hr className='mt-7 mb-7'/>
          <div className='all_the_rest_blogggs col-start-1 col-end-1 row-start-2 row-span-2'><AllTheRestBlogggsHero /></div>
        </div>
        <div className=''><PeopleTrendYourtopic /></div>

    </div>
      
  )
}

export default Feeds