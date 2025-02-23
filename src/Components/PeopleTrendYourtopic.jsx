import 'react'
import { MdPeople, MdTrendingUp} from 'react-icons/md'
import {FaLeaf} from 'react-icons/fa'

const PeopleTrendYourtopic = () => {
  return (
      <div className='border-l-4 border-gray-100 h-full self-center'>
        <div>
          <MdPeople />
        <h1>People who to follow</h1>
          <div>
            <img src="" alt="" />
          <h3>Samson Gulma Tekeste</h3>
          <button type="">Follow</button>
          </div>
        </div>

          <hr />
          <div>
        <MdTrendingUp />
        <h1>Today&apos;s top trends</h1>
          </div>

          <hr />
          <div>
              <FaLeaf/>
          </div>
          
    </div>
  )
}

export default PeopleTrendYourtopic