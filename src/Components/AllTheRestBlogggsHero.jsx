import {Link} from 'react-router-dom'
import { MdBookmark } from 'react-icons/md'


const AllTheRestBlogggsHero = () => {
  return (
      <Link to="{`/blogggs/${bloggg.id}`}" className=''>
          <h1 className='text-2xl font-semibold pb-7'>All Blogggs</h1>
            <div className='flex pl-7 pt-3 '>
                <div className=''>
                  <img className=' h-[30px] w-[30px] bg-black rounded-lg self-center' src="" alt="" />
                </div>
          
                <h4 className='overflow-hidden truncate self-center pl-2'>Samson Gulma Tekeste 1</h4>
            </div>
                              
            <div className='place-content-center bg-amber-700 ml-2 mt-2 mr-2'>
                <img className=' overflow-hidden h-full ' src="../../public/Images/screen.png" alt="" />
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
                <p className='underline decoration-dotted pl-2 font-semibold'>Read more</p>
            </div>
                          
            <div className='grid grid-cols-2 auto-rows-auto ml-2 mt-4 mb-4 '>
                <p className='font-extralight'>0sec ago</p>
                <MdBookmark className=' h-5 w-5 self-center text-right justify-self-end mr-7'/>
            </div>
    </Link>
  )
}

export default AllTheRestBlogggsHero