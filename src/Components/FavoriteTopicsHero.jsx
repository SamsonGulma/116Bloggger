import 'react'
import { MdBookmark } from 'react-icons/md'


const Heros = () => {
  return (
    <div className='fav_card_one  gird grid-cols-8 grid-rows-8 shadow-2xl rounded-2xl border-1 border-gray-200'>
          <div className='flex flex-col row-start-1 row-end-1 col-start-1 col-end-1'>
              
        <div className='flex pl-7 pt-3'>
            <div className=''>
                <img className=' h-[30px] w-[30px] bg-black rounded-lg self-center' src="" alt="" />
            </div>

             <h4 className='overflow-hidden truncate self-center pl-2'>Samson Gulma Tekeste 1</h4>
        </div>
          
        <div className='title_content_authorImg_author_time_bookmark  overflow-hidden'>
            <h1 className='font-extrabold overflow-hidden pl-2 '>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti beatae et repellat ea ad
            </h1>

            <p className='overflow-hidden pl-2 pr-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus exercitationem quasi dolor, quis, rerum odio, a tenetur
                deleniti error voluptatibus voluptatem. Sapiente labore odio corporis,
                ecusandae totam eveniet cum fugit.
            </p>
        </div>
                      
        <div className='flex flex-row'>
            <p className='underline decoration-dotted pl-2 font-semibold'>Read more -&gt;</p>
        </div>
                
        <div className='grid grid-cols-2 auto-rows-auto ml-2 mt-4 mb-4 '>
            <p className='font-extralight'>0sec ago</p>
            <MdBookmark className=' h-5 w-5 self-center text-right justify-self-end mr-7'/>
         </div>
                          
          </div>
          

        </div>


  )
}

export default Heros