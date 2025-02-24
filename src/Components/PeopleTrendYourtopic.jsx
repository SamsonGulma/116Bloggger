import 'react'
import { MdPeople, MdTrendingUp} from 'react-icons/md'
import {FaLeaf} from 'react-icons/fa'

const PeopleTrendYourtopic = () => {
  return (
      <div className=''>
        <div className='people-to-follow mt-4 '>
          <div className='flex flex-row ml-7 mt-7 mb-5 items-center'>
            <MdPeople className='text-gray-500 text-lg'/>
            <h1 className='ml-1 font-medium text-lg'>People who to follow</h1>
          </div>
        <div className='flex flex-col ml-14'>
          
          <div className='flex flex-row mb-4  items-center'>
            <div className='flex flex-row'>
              <img src="" alt="" className='w-[25px] h-[25px] cursor-pointer rounded-full bg-blue-100' />          
            <h3 className='ml-1.5 mr-1.5 hover:underline hover:decoration-solid hover cursor-pointer'>The Bible Project</h3>
            </div>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5 cursor-pointer hover:bg-black hover:text-white'>Following</button>
            
          </div>
          <div className='flex flex-row mb-4  items-center '>
            <img src="" alt="" className='w-[25px] h-[25px] cursor-pointer rounded-full bg-blue-100' />  
            <h3 className='ml-1.5 mr-1.5 hover:underline hover:decoration-solid hover cursor-pointer'>Samson Gulma Tekeste</h3>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5 cursor-pointer hover:bg-black hover:text-white '>Follow</button>
          </div>
          <div className='flex flex-row mb-4 items-center'>
            <img src="" alt="" className='w-[25px] h-[25px] cursor-pointer rounded-full bg-blue-100' />          
            <h3 className='ml-1.5 mr-1.5 hover:underline hover:decoration-solid cursor-pointer'>Kidus Tekeste</h3>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5 cursor-pointer hover:bg-black hover:text-white'>Follow</button>
          </div>
        </div>
          <a href=""className='ml-7 text-gray-400 font-light underline decoration-dotted hover:decoration-solid'>See the full list</a>
        </div>

          <hr className='w-[20vw] place-self-center mt-7 mb-4 border-gray-300'/>
        <div className='trendingup mt-4'>
          <div className='flex flex-row ml-7 mt-7 mb-7 items-center'>
            <MdTrendingUp className='text-gray-500 text-lg'/>
            <h1 className='ml-1 font-medium text-lg'>Today&apos;s top trends</h1>
          </div>

        <div className='flex flex-col'>
          <div>
            <h2 className='ml-14 font-bold hover:underline hover:decoration-solid hover cursor-pointer'>JESUS CHRIST IS LORD OF ALL TIME. let us see it in every perspective.</h2>
          </div>
          <div className='flex flex-row ml-17 mb-4 items-center'>
            <p className='text-gray-400 pt-1.5 pb-1.5'>By</p>
            <img src="" alt="" className='ml-1 w-[25px] h-[25px] cursor-pointer pt-1.5 pb-1.5 rounded-full bg-blue-100'/>
            <h3 className='ml-1.5 pt-1.5 pb-1.5  hover:underline hover:decoration-solid cursor-pointer'>The BIBLE Project</h3>
          </div>
          <div>
            <h2 className='ml-14 font-bold hover:underline hover:decoration-solid hover cursor-pointer'>JESUS CHRIST IS LORD OF ALL TIME. let us see it in every perspective.</h2>
          </div>
          <div className='flex flex-row ml-17 mb-4 items-center'>
            <p className='text-gray-400 pt-1.5 pb-1.5'>By</p>
            <img src="" alt="" className='ml-1 w-[25px] h-[25px] cursor-pointer pt-1.5 pb-1.5 rounded-full bg-blue-100'/>
            <h3 className='ml-1.5 pt-1.5 pb-1.5  hover:underline hover:decoration-solid cursor-pointer'>Samson Gulma</h3>
          </div>
          <div>
            <h2 className='ml-14 font-bold hover:underline hover:decoration-solid hover cursor-pointer'>JESUS CHRIST IS LORD OF ALL TIME. let us see it in every perspective.</h2>
          </div>
          <div className='flex flex-row ml-17 mb-4 items-center'>
            <p className='text-gray-400 pt-1.5 pb-1.5'>By</p>
            <img src="" alt="" className='ml-1 w-[25px] h-[25px] cursor-pointer pt-1.5 pb-1.5 rounded-full bg-blue-100'/>
            <h3 className='ml-1.5 pt-1.5 pb-1.5  hover:underline hover:decoration-solid cursor-pointer'>Samson Gulma</h3>
          </div>
          <div>
            <h2 className='ml-14 font-bold hover:underline hover:decoration-solid hover cursor-pointer'>JESUS CHRIST IS LORD OF ALL TIME. let us see it in every perspective.</h2>
          </div>
          <div className='flex flex-row ml-17 mb-4 items-center'>
            <p className='text-gray-400 pt-1.5 pb-1.5'>By</p>
            <img src="" alt="" className='ml-1 w-[25px] h-[25px] cursor-pointer pt-1.5 pb-1.5 rounded-full bg-blue-100'/>
            <h3 className='ml-1.5 pt-1.5 pb-1.5 hover:underline hover:decoration-solid cursor-pointer'>Samson Gulma</h3>
          </div>
        </div>
          <a href=""className='ml-7 text-gray-400 font-light underline decoration-dotted hover:decoration-solid'>See the full list</a>

        </div>

          <hr className='w-[20vw] place-self-center mt-7 mb-4 border-gray-300'/>
        <div className='topics-for-you mt-7'>
          <div className='flex flex-row ml-7 mb-7 items-center'>
            <FaLeaf className='text-gray-500 text-lg' />
            <h1 className='ml-1 font-medium text-lg'>Topics for you from Our Team.</h1>  
          </div>
          <div className='ml-14 items-center mb-3'>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5 cursor-pointer'>Bloggger</button>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5 cursor-pointer'>Programming</button>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5 cursor-pointer'>Programmmmmming</button>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5 cursor-pointer'>116</button>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5 cursor-pointer'>Progggggramming</button>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5 cursor-pointer'>Blogggs</button>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5 cursor-pointer'>Programming</button>

          </div>
          <a href="" className='ml-7 text-gray-400 font-light underline decoration-dotted hover:decoration-solid'>See the full list</a>

        </div>
          
    </div>
  )
}

export default PeopleTrendYourtopic