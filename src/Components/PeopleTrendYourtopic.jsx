import 'react'
import { MdPeople, MdTrendingUp} from 'react-icons/md'
import {FaLeaf} from 'react-icons/fa'

const PeopleTrendYourtopic = () => {
  return (
      <div className='border-l-4 border-gray-100 h-fullr'>
        <div className='people-to-follow '>
          <div>
            <MdPeople />
            <h1>People who to follow</h1>
          </div>
          <div className='flex flex-row'>
            <img src="" alt="" />
            <h3>Samson Gulma Tekeste</h3>
            <button>Follow</button>
          </div>
          <a href="">See the full list</a>
        </div>

          <hr />
        <div className='trendingup'>
          <div>
            <MdTrendingUp />
            <h1>Today&apos;s top trends</h1>
          </div>
          <div>
            <p>By</p>
            <img src="" alt="" />
            <h3>Samson Gulma</h3>
          </div>
          <a href="">See the full list</a>

        </div>

          <hr />
        <div className='topics'>
          <div>
            <FaLeaf />
            <h1>Topics for you from Our Team.</h1>  
            <button>Programming</button>
          </div>
          <a href="">See the full list</a>

        </div>
          
    </div>
  )
}

export default PeopleTrendYourtopic