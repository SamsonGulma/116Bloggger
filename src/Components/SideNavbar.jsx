import 'react'
import {
    MdOutlineHome, MdOutlineNotificationsActive,
    MdOutlineExtension, MdOutlineBookmarks,
} from 'react-icons/md'
import { FaLeaf, FaRegEdit } from 'react-icons/fa'
import '../assets/Styles/SideNavbar.css'

const SideNavbar = () => {
  return (
      <div className='side-nav-bar !important fixed bg-transparent backdrop-blur-3xl w-24 z-1000'>
          <div className='h-[60px] w-24 absolute overflow-hidden flex flex-col pt-4 border-solid border-r-4 border-gray-100 cursor-pointer '>
            <FaLeaf className='  h-[40px] w-[40px] place-self-center'/>
          </div>
          <div className='h-[100vh] w-24 flex flex-col justify-center border-solid border-r-4 border-gray-100 '>
            <div className='home-icon icon mb-5 rounded-2xl place-self-center p-5 hover:bg-gray-100 hover:drop-shadow-lg cursor-pointer'>
            <MdOutlineHome className='h-[30px] w-[30px] '/>
            </div>
            <div className='notification-icon icon mb-5 rounded-2xl place-self-center p-5  hover:bg-gray-100 hover:drop-shadow-lg cursor-pointer' >
                <MdOutlineNotificationsActive className='h-[30px] w-[30px] '/>
            </div>
            <div className='extension-icon icon mb-5 rounded-2xl place-self-center p-5  hover:bg-gray-100 hover:drop-shadow-lg cursor-pointer '>
                <MdOutlineExtension  className='h-[30px] w-[30px] '/>
            </div>
            <div className='bookmark-icon icon mb-5 rounded-2xl place-self-center p-5 hover:bg-gray-100 hover:drop-shadow-lg cursor-pointer '>
                <MdOutlineBookmarks  className='h-[30px] w-[30px]'/>
            </div>
            <div className='edit-icon icon mb-5 rounded-2xl place-self-center p-5 hover:bg-gray-100 hover:drop-shadow-lg  cursor-pointer'>
                <FaRegEdit  className='h-[30px] w-[30px]'/>
            </div>
          
          </div>

    </div>
      
  
)}

export default SideNavbar