import 'react'
import { MdBookmark } from 'react-icons/md'
import blogggs from '../blogggs.json'


const Heros = () => {
    console.log(blogggs);
    return (
        <div className='fav_card_one'>
            {
            blogggs.map((bloggg) => {
                <div className='flex flex-col min-h-0 h-auto shadow-2xl rounded-2xl border-1 border-gray-200'>
                
                    <div className='flex pl-7 pt-3'>
                        <div className=''>
                            <img className=' h-[30px] w-[30px] bg-black rounded-lg self-center' src={bloggg.content_author_picture} alt="" />
                        </div>

                    <h4 className='overflow-hidden truncate self-center pl-2'>{ bloggg.content_author_name }</h4>
                    </div>
                    
                    <div className='title_content_authorImg_author_time_bookmark  overflow-hidden'>
                        <h1 className='font-extrabold overflow-hidden pl-2 '>{ bloggg.content_title }</h1>
                        <p className='overflow-hidden pl-2 pr-2'>{bloggg.content_text}</p>
                    </div>
                                
                    <div className='flex flex-row'>
                        <p className='underline decoration-dotted pl-2 font-semibold cursor-pointer'>Read more -&gt;</p>
                    </div>
                            
                    <div className='grid grid-cols-2 auto-rows-auto ml-2 mt-4 mb-4 '>
                        <p className='font-extralight'>{bloggg.content_posted_date}</p>
                        <MdBookmark className=' h-5 w-5 self-center text-right justify-self-end mr-7'/>
                    </div>
                                    
                </div>
            })
            }

        </div>


  )
}

export default Heros