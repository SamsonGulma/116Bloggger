import 'react'
import '../assets/Styles/Feeds.css'
import { MdBookmark } from 'react-icons/md'


const Feeds = () => {
  return (
      <div className='all-feeds'>
          
          <div className=''>
              
          <div className='for-you'>
              <div className='w-50 h-50 bg-amber-700'>
                  <img className='w-50 h-50 overflow-hidden' src="../../public/Images/screen.png" alt="" />
              </div>

              <div className=''>
                  <h3 className=''>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>

                  <p className=''>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Libero esse aut asperiores enim, nam similique debitis nemo ad
                      odit accusantium quis recusandae tempora suscipit obcaecati
                      aspernatur. Rerum facere accusantium autem.
                  </p>

                  <div className=''>
                      <div className=''>
                        <img className='' src="" alt="" />
                      </div>

                      <h4 className=''>Samson Gulma Tekeste</h4>
                  </div>

                  <div className=''>
                      <p className=''>0sec ago</p>
                      <MdBookmark/>
                  </div>
                </div>
                      
            </div>
          </div>

          <div className='all'>
              <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ab fugit tempora magnam! Modi a autem minima, nostrum eaque assumenda provident praesentium, porro vero, ex delectus natus facere rerum sequi!
              </p>
          </div>

        </div>
  )
}

export default Feeds