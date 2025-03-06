import { Link } from 'react-router-dom'
const ViewMoreFavoriteBlogggs = () => {
  return (
      <div className='w-[250px] h-[40px] border-1 rounded-xl self-center hover:shadow-md hover:drop-shadow-sm cursor-pointer'>
          <Link to='/pennyblogggs' className='block w-[250px] h-[40px] text-center  pt-[5px] overflow-hidden '>
              View More Favorite Topics
          </Link> 
    </div>
  )
}

export default ViewMoreFavoriteBlogggs