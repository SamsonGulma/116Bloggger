import 'react'
import { MdPeople, MdTrendingUp} from 'react-icons/md'
import {FaLeaf} from 'react-icons/fa'

const PeopleTrendYourtopic = () => {
  return (
      <div className='border-l-4 border-gray-100 h-full'>
        <div className='people-to-follow mt-4 '>
          <div className='flex flex-row ml-7  items-center'>
            <MdPeople className='text-gray-500'/>
            <h1 className='ml-1 font-medium'>People who to follow</h1>
          </div>
        <div className='flex flex-col ml-14'>
          
          <div className='flex flex-row items-center border-1'>
            <img src="" alt="" className='w-[25px] h-[25px] rounded-full bg-blue-100' />          
            <h3 className='ml-1'>The Bible Project</h3>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5'>Following</button>
            
          </div>
          <div className='flex flex-row items-center border-1 '>
            <img src="" alt="" className='w-[25px] h-[25px] rounded-full bg-blue-100' />  
            <h3 className='ml-1'>Samson Gulma Tekeste</h3>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5 '>Follow</button>
          </div>
            
          <div className='flex flex-row items-center border-1'>
            <img src="" alt="" className='w-[25px] h-[25px] rounded-full bg-blue-100' />          
            <h3 className='ml-1'>Samson Gulma Tekeste</h3>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5'>Follow</button>
          </div>
        </div>
          <a href=""className='ml-7 text-gray-400 font-light underline decoration-dotted'>See the full list</a>
        </div>

          <hr className='w-[20vw] place-self-center mt-4 mb-4 border-gray-300'/>
        <div className='trendingup mt-4'>
          <div className='flex flex-row ml-7 items-center'>
            <MdTrendingUp className='text-gray-500'/>
            <h1 className='ml-1 font-medium'>Today&apos;s top trends</h1>
          </div>
          <div className='flex flex-row ml-14 items-center border-1'>
            <p className='text-gray-400'>By</p>
            <img src="" alt="" className='ml-1 w-[25px] h-[25px] rounded-full bg-blue-100'/>
            <h3 className='ml-1'>Samson Gulma</h3>
          </div>
          <a href=""className='ml-7 text-gray-400 font-light underline decoration-dotted'>See the full list</a>

        </div>

          <hr className='w-[20vw] place-self-center mt-4 mb-4 border-gray-300'/>
        <div className='topics-for-you mt-4'>
          <div className='flex flex-row ml-7 items-center'>
            <FaLeaf className='text-gray-500' />
            <h1 className='ml-1 font-medium'>Topics for you from Our Team.</h1>  
          </div>
          <div className='ml-14 items-center'>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5'>Programmmmmming</button>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5'>Bloggger</button>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5'>Programming</button>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5'>116</button>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5'>Progggggramming</button>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5'>Blogggs</button>
            <button className='h-[40px] border-2 pr-2 pl-2 rounded-3xl self-center m-1.5'>Programming</button>

          </div>
          <a href="" className='ml-7 text-gray-400 font-light underline decoration-dotted'>See the full list</a>

        </div>
          
    </div>
  )
}

export default PeopleTrendYourtopic