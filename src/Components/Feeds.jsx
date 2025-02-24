import 'react'
import '../assets/Styles/Feeds.css'
import PeopleTrendYourtopic from './PeopleTrendYourtopic'
import Heros from './FavoriteTopicsHero'



const Feeds = () => {
  return (
      <div className='feeds_and_blogggs_container w-full mt-[10vh] ml-[5vw] pt-[7vh] pl-[5vw] border border-black grid grid-cols-3 grid-rows-2 grid-flow-col'>
          
        <div className='all_blogggs_for_you grid grid-cols-3 grid-rows-[auto_1fr] row-start-1 col-start-1 row-span-2 col-span-2'>
              
          <div className='your_favorite_topics row-start-1 col-start-1 row-span-1'> <Heros/> </div>

            <div className='all_the_rest_blogggs row-start-2 row-span-2 col-start-1 col-span-2'>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ab fugit tempora magnam! Modi a autem minima, nostrum eaque assumenda provident praesentium, porro vero, ex delectus natus facere rerum sequi!
                </p>
              </div>
              
          </div>


          <div className=''>
            <PeopleTrendYourtopic />
              
          </div>

    </div>
      
  )
}

export default Feeds