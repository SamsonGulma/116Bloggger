import { NavLink } from 'react-router-dom'
import {
    MdOutlineHome, MdOutlineNotificationsActive,
    MdOutlineExtension, MdOutlineBookmarks,
} from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'

const SideNavbar = () => {
    const activePageButton = ({isActive}) => 
        isActive ?
            'home-icon icon mb-5 rounded-2xl place-self-center p-5 bg-gray-100 drop-shadow-lg cursor-pointer'
            :
            'home-icon icon mb-5 rounded-2xl place-self-center p-5 hover:bg-gray-100 hover: drop-shadow-lg cursor-pointer'
    
    return (          
          <div className='fixed bg-transparent backdrop-blur-3xl w-24 h-full flex flex-col justify-center border-solid border-r-4 border-gray-100 '>
            <NavLink to='/home' className={activePageButton}>
            <MdOutlineHome className='h-[30px] w-[30px] '/>
            </NavLink>
            <NavLink to='/notifications' className={activePageButton} >
                <MdOutlineNotificationsActive className='h-[30px] w-[30px] '/>
            </NavLink>
            <NavLink to='/pennyblogggs' className={activePageButton}>
                <MdOutlineExtension  className='h-[30px] w-[30px] '/>
            </NavLink>
            <NavLink to='/bookmarks' className={activePageButton}>
                <MdOutlineBookmarks  className='h-[30px] w-[30px]'/>
            </NavLink>
            <NavLink to='/writebloggg' className={activePageButton}>
                <FaRegEdit  className='h-[30px] w-[30px]'/>
            </NavLink>
          
          </div>

      
  
)}

export default SideNavbar