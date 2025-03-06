import { Link } from 'react-router-dom'
import {
    MdOutlineHome, MdOutlineNotificationsActive,
    MdOutlineExtension, MdOutlineBookmarks,
} from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'

const SideNavbar = () => {
  return (          
          <div className='fixed bg-transparent backdrop-blur-3xl w-24 h-full flex flex-col justify-center border-solid border-r-4 border-gray-100 '>
            <Link to='/home' className='home-icon icon mb-5 rounded-2xl place-self-center p-5 hover:bg-gray-100 hover:drop-shadow-lg cursor-pointer'>
            <MdOutlineHome className='h-[30px] w-[30px] '/>
            </Link>
            <Link to='/notifications' className='notification-icon icon mb-5 rounded-2xl place-self-center p-5  hover:bg-gray-100 hover:drop-shadow-lg cursor-pointer' >
                <MdOutlineNotificationsActive className='h-[30px] w-[30px] '/>
            </Link>
            <Link to='/pennyblogggs' className='extension-icon icon mb-5 rounded-2xl place-self-center p-5  hover:bg-gray-100 hover:drop-shadow-lg cursor-pointer '>
                <MdOutlineExtension  className='h-[30px] w-[30px] '/>
            </Link>
            <Link to='/bookmarks' className='bookmark-icon icon mb-5 rounded-2xl place-self-center p-5 hover:bg-gray-100 hover:drop-shadow-lg cursor-pointer '>
                <MdOutlineBookmarks  className='h-[30px] w-[30px]'/>
            </Link>
            <Link to='/writebloggg' className='edit-icon icon mb-5 rounded-2xl place-self-center p-5 hover:bg-gray-100 hover:drop-shadow-lg  cursor-pointer'>
                <FaRegEdit  className='h-[30px] w-[30px]'/>
            </Link>
          
          </div>

      
  
)}

export default SideNavbar