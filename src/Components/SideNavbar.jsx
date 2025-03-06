import 'react'
import {
    MdOutlineHome, MdOutlineNotificationsActive,
    MdOutlineExtension, MdOutlineBookmarks,
} from 'react-icons/md'
import { FaLeaf, FaRegEdit } from 'react-icons/fa'

const SideNavbar = () => {
  return (
      <div className='side-nav-bar !important fixed bg-transparent backdrop-blur-3xl w-24 z-1000'>
          <a href='/' className='h-[60px] w-24 absolute overflow-hidden flex flex-col pt-4 border-solid border-r-4 border-gray-100 cursor-pointer '>
            <FaLeaf className='  h-[40px] w-[40px] place-self-center'/>
          </a>
          <div className='h-[100vh] w-24 flex flex-col justify-center border-solid border-r-4 border-gray-100 '>
            <a href='' className='home-icon icon mb-5 rounded-2xl place-self-center p-5 hover:bg-gray-100 hover:drop-shadow-lg cursor-pointer'>
            <MdOutlineHome className='h-[30px] w-[30px] '/>
            </a>
            <a href='/notifications' className='notification-icon icon mb-5 rounded-2xl place-self-center p-5  hover:bg-gray-100 hover:drop-shadow-lg cursor-pointer' >
                <MdOutlineNotificationsActive className='h-[30px] w-[30px] '/>
            </a>
            <a href='/pennyblogggs' className='extension-icon icon mb-5 rounded-2xl place-self-center p-5  hover:bg-gray-100 hover:drop-shadow-lg cursor-pointer '>
                <MdOutlineExtension  className='h-[30px] w-[30px] '/>
            </a>
            <a href='/bookmarks' className='bookmark-icon icon mb-5 rounded-2xl place-self-center p-5 hover:bg-gray-100 hover:drop-shadow-lg cursor-pointer '>
                <MdOutlineBookmarks  className='h-[30px] w-[30px]'/>
            </a>
            <a href='/writebloggg' className='edit-icon icon mb-5 rounded-2xl place-self-center p-5 hover:bg-gray-100 hover:drop-shadow-lg  cursor-pointer'>
                <FaRegEdit  className='h-[30px] w-[30px]'/>
            </a>
          
          </div>

    </div>
      
  
)}

export default SideNavbar