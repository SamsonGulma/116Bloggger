import 'react'
import PeopleTrendYourtopic from './PeopleTrendYourtopic'
import FavoriteTopicsListings from './FavoriteTopicsListings'
import AllTheRestBlogggsHero from './AllTheRestBlogggsHero'
import ViewMoreFavoriteBlogggs from './ViewMoreFavoriteBlogggs'


const FeedsContainer = () => {
  return (
    <div className='feeds_and_blogggs_container pt-[15vh] pl-[10vw] grid grid-cols-3 grid-rows-2 w-screen'>
        <div className='all_blogggs_for_you flex flex-col row-start-1 col-start-1 row-span-2 col-span-2'>
          <div className='your_favorite_topics  col-start-1 col-end-1 row-start-1 row-span-1'> <FavoriteTopicsListings /> </div>
          <ViewMoreFavoriteBlogggs/>
        <hr className='mt-7 mb-7' />
          <div className='all_the_rest_blogggs col-start-1 col-end-1 row-start-2 row-span-2'><AllTheRestBlogggsHero /></div>
        </div>
        <div className=''><PeopleTrendYourtopic /></div>

    </div>
      
  )
}

export default FeedsContainer