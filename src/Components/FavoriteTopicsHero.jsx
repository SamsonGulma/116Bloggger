import { MdBookmark } from 'react-icons/md'
import blogggs from '../blogggs.json'


const FavoriteTopicsHero = () => {
    const favoriteTopics = blogggs.slice(0, 1);

   
    return (
        <div className='fav_card_one mb-7'>
            {
            favoriteTopics.map((bloggg) => (
                <div key={''} className='flex flex-col  shadow-2xl rounded-2xl border-1 border-gray-200'>
                
                    <div className='flex pl-7 pt-3'>
                        <div className=''>
                            <img className=' h-[30px] w-[30px] bg-black rounded-lg self-center' src={bloggg.content_author_picture} alt="" />
                        </div>

                        <h4 className='overflow-hidden truncate self-center pl-2'>{bloggg.content_author_name}</h4>
                    </div>
                    
                    <div className='title_content_authorImg_author_time_bookmark  overflow-hidden'>
                        <h1 className='font-extrabold overflow-hidden pl-2 '>{ bloggg.content_title }</h1>
                        <p className='overflow-hidden pl-2 pr-2'>{bloggg.content_text}</p>
                    </div>
                                
                    <div className='flex flex-row'>
                        <a href={`/bloggg/${bloggg.id}`} className='underline decoration-dotted pl-2 font-semibold cursor-pointer'>
                           
                        </a>
                    </div>
                            
                    <div className='grid grid-cols-2 auto-rows-auto ml-2 mt-4 mb-4 '>
                        <p className='font-extralight'>{bloggg.content_posted_date}</p>
                        <MdBookmark className=' h-5 w-5 self-center text-right justify-self-end mr-7'/>
                    </div>
                                    
                </div>
            ))
            }

        </div>


  )
}

export default FavoriteTopicsHero