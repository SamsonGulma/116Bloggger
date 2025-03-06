import { Link } from 'react-router-dom'
import { MdSearch, MdAccountCircle, MdMoreVert, } from 'react-icons/md'
import { FaLeaf } from 'react-icons/fa'

const UpNavbar = () => {
  return (
      <div className='upper-nav-bar fixed h-[10vh] w-full grid grid-cols-2 gap-4 border-b-4 border-b-gray-100 bg-transparent backdrop-blur-3xl z-100'>
          <div  className='h-[10vh] w-24 absolute overflow-hidden pt-4 justify-self-start border-solid border-r-4 border-gray-100 cursor-pointer '>
            <FaLeaf className='  h-[40px] w-[40px] place-self-center'/>
          </div>
          <div className='search-bar h-13 w-[25vw] bg-tranparent flex flex-row rounded-4xl overflow-hidden place-self-center border-2 border-gray-100'>
                <MdSearch className='place-self-center w-[25px] h-[25px] ml-5 mr-2'/>
                <input type="text" placeholder='Search Blogggs...' className='outline-none w-[30rem]'/> 
          </div>
      
      <div className='justify-self-end flex flex-row gap-[7vw] '>
          <Link to='/profile' className='profile flex flex-row ml-[20vw] h-13 place-self-center gap-4 '>
              <MdAccountCircle className='place-self-center justify-end w-[40px] h-[40px] cursor-pointer'/>
              <p className='place-self-center text-right underline decoration-dotted hover:decoration-solid cursor-pointer'>Samson Gulma Tekeste</p>
          </Link>
          <div className='ver-one flex flex-row w-7 h-7 justify-center place-self-center mr-20 rounded-[100%] border-1' title='avur YHWH-116Bloggger +Version 1.0'>
              <MdMoreVert className='place-self-center w-[20px] h-[20px] cursor-pointer'/>
          </div>
      </div>
    </div>
  )
}

export default UpNavbar