import 'react'
import '../assets/Styles/Feeds.css'
import { MdBookmark } from 'react-icons/md'
import PeopleTrendYourtopic from './PeopleTrendYourtopic'


const Feeds = () => {
  return (
      <div className='feeds_and_blogggs_container w-screen mt-[10vh] ml-[5vw] pt-[7vh] pl-[5vw] border border-black grid grid-cols-3 grid-rows-2 grid-flow-col'>
          
        <div className='all_blogggs_for_you grid grid-cols-3 grid-rows-[auto_1fr] row-start-1 col-start-1 row-span-2 col-span-2'>
              
          <div className='your_favorite_related-topics row-start-1 col-start-1 row-span-1'>
            
                  {/**
                   * This first fav-Card Starts here
                   */}
                  
                  
                  <div className='fav_card_one flex flex-col  mt-20  shadow-2xl rounded-2xl border-1'>
                      
                      <div className='flex pl-2 pt-3'>
                        <div className=''>
                            <img className=' h-[30px] w-[30px] bg-black rounded-lg self-center' src="" alt="" />
                        </div>

                        <h4 className='overflow-hidden truncate self-center pl-2'>Samson Gulma Tekeste 1</h4>
                    </div>
                    
                        <div className='place-content-center bg-amber-700 ml-2 mt-2 mr-2'>
                            <img className=' overflow-hidden h-full ' src="../../public/Images/screen.png" alt="" />
                        </div>
                        <div className='title_content_authorImg_author_time_bookmark  overflow-hidden'>
                            <h1 className='font-extrabold overflow-hidden pl-2 '>
                                Lorem, ipsum dolor
                            </h1>

                            <p className='overflow-hidden pl-2 pr-2'>
                                Lorem ipsum dolor sit amet . . .
                                
                            </p>
                      </div>
                      
                      <div className='flex flex-row'>
                          <p className='underline decoration-dotted pl-2 font-semibold'>Read more -&gt;</p>
                      </div>
                
                    <div className='grid grid-cols-2 auto-rows-auto ml-2 mt-4 mb-4 '>
                        <p className='font-extralight'>0sec ago</p>
                        <MdBookmark className=' h-5 w-5 self-center text-right justify-self-end mr-7'/>
                    </div>
                          
                  </div>
 
                  {/**
                   * This first fav-Card ends here!!!
                   * 
                   * 
                   * ...then the second fav-Card starts here
                   */}

                   <div className='fav_card_two flex flex-col shadow-2xl rounded-2xl border-1'>
                      
                      <div className='flex pl-2 pt-3'>
                        <div className=''>
                            <img className=' h-[30px] w-[30px] bg-black rounded-lg self-center' src="" alt="" />
                        </div>

                        <h4 className='overflow-hidden truncate self-center pl-2'>Samson Gulma Tekeste 2</h4>
                    </div>
                      
                <div className='place-content-center bg-amber-700 ml-2 mt-2 mr-2'>
                    <img className=' overflow-hidden h-full ' src="../../public/Images/screen.png" alt="" />
                </div>
        
                <div className='title_content_authorImg_author_time_bookmark  overflow-hidden'>
                    <h1 className='font-extrabold overflow-hidden pl-2 '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>

                    <p className='overflow-hidden pl-2 pr-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero esse aut asperiores enim, nam similique debitis nemo ad
                        odit accusantium quis recusandae tempora suscipit obcaecati
                              aspernatur. Rerum facere accusantium autem. Lorem ipsum dolor sit amet
                              consectetur adipisicing elit. Quod culpa ullam accusantium
                              nesciunt modi aut vel explicabo, debitis in. Exercitationem
                              doloremque eum, nemo autem necessitatibus eius minus velit iure culpa!
                          consectetur adipisicing elit. Quod culpa ullam accusantium
                              nesciunt modi aut vel explicabo, debitis in. Exercitationem
                              doloremque eum, nemo autem necessitatibus eius minus velit iure culpa!
                        
                    </p>

                      </div>
                      <div className='flex flex-row'>
                          <p className='underline decoration-dotted pl-2 font-semibold'>Read more -&gt;</p>
                      </div>
                    <div className='grid grid-cols-2 auto-rows-auto ml-2 mt-4 mb-4 '>
                        <p className='font-extralight'>0sec ago</p>
                        <MdBookmark className=' h-5 w-5 self-center text-right justify-self-end mr-7'/>
                    </div>
                          
                  </div>

                  {/**
                   * This second fav-Card ends here!!!
                   * 
                   * 
                   * ...then the third fav-Card starts here
                   */}
                  
                <div className='fav_card_three flex flex-col shadow-2xl rounded-2xl border-1'>
                      
                      <div className='flex pl-2 pt-3'>
                        <div className=''>
                            <img className=' h-[30px] w-[30px] bg-black rounded-lg self-center' src="" alt="" />
                        </div>

                        <h4 className='overflow-hidden truncate self-center pl-2'>Samson Gulma Tekeste 3</h4>
                      </div>
                      
                      <div className='card_contents flex flex-row overflow-hidden'>
                          
                        
                
                        <div className='title_content_authorImg_author_time_bookmark  overflow-hidden'>
                            <h1 className='font-extrabold overflow-hidden pl-2 pr-1'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </h1>

                            <p className='overflow-hidden pl-2 pr-2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Libero esse aut asperiores enim, nam similique debitis nemo ad
                                odit accusantium quis recusandae tempora suscipit obcaecati
                                aspernatur. Rerum facere accusantium autem.
                                
                            </p>

                          </div>
                          <div className='place-content-center w-[20in] h-[2in] bg-amber-700 ml-2 mt-2 mr-2'>
                            <img className=' overflow-hidden h-full ' src="../../public/Images/screen.png" alt="" />
                        </div>
                      </div>
                      <div className='flex flex-row pb-4'>
                          <p className='underline decoration-dotted pl-2  font-semibold'>Read more -&gt;</p>
                      </div>

                
                    <div className='grid grid-cols-2 auto-rows-auto ml-2 mt-4 mb-4 '>
                        <p className='font-extralight'>0sec ago</p>
                        <MdBookmark className=' h-5 w-5 self-center text-right justify-self-end mr-7'/>
                    </div>
                          
                  </div>
                  


                  {/**
                   * This third fav-Card ends here!!!
                   * 
                   * 
                   * ...then the fourth fav-Card starts here
                    */}

                   <div className='fav_card_four flex flex-col  shadow-2xl rounded-2xl border-1'>
                      
                      <div className='flex pl-2 pt-3'>
                        <div className=''>
                            <img className=' h-[30px] w-[30px] bg-black rounded-lg self-center' src="" alt="" />
                        </div>

                        <h4 className='overflow-hidden truncate self-center pl-2'>Samson Gulma Tekeste 4</h4>
                    </div>
                      
                <div className='place-content-center bg-amber-700 ml-2 mt-2 mr-2'>
                    <img className=' overflow-hidden h-full ' src="../../public/Images/screen.png" alt="" />
                </div>
        
                <div className='title_content_authorImg_author_time_bookmark  overflow-hidden'>
                    <h1 className='font-bold overflow-hidden pl-2 '>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    </h1>

                    <p className='overflow-hidden pl-2 pr-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Libero esse aut asperiores enim, nam similique debitis nemo ad
                        odit accusantium quis recusandae tempora suscipit obcaecati
                        aspernatur. Rerum facere accusantium autem.
                        
                    </p>

                </div>

                    <div className='flex flex-row'>
                        <p className='underline decoration-dotted pl-2 font-semibold'>Read more -&gt;</p>
                    </div>
                    <div className='grid grid-cols-2 auto-rows-auto ml-2 mt-4 mb-4 '>
                        <p className='font-extralight'>0sec ago</p>
                        <MdBookmark className=' h-5 w-5 self-center text-right justify-self-end mr-7'/>
                    </div>
                          
                  </div>

                 

                   {/**
                   * This fourth fav-Card ends here!!!
                   * 
                   * 
                   * ...then the fifth fav-Card starts here
                   */}

                   <div className='fav_card_five flex flex-col shadow-2xl rounded-2xl border-1'>
                      
                      <div className='flex pl-2 pt-3'>
                        <div className=''>
                            <img className=' h-[30px] w-[30px] bg-black rounded-lg self-center' src="" alt="" />
                        </div>

                        <h4 className='overflow-hidden truncate self-center pl-2'>Samson Gulma Tekeste 5</h4>
                    </div>
                    
                        <div className='place-content-center bg-amber-700 ml-2 mt-2 mr-2'>
                            <img className=' overflow-hidden h-full ' src="../../public/Images/screen.png" alt="" />
                        </div>
                        <div className='title_content_authorImg_author_time_bookmark  overflow-hidden'>
                            <h1 className='font-extrabold overflow-hidden pl-2 '>
                                Lorem, ipsum dolor
                            </h1>

                            <p className='overflow-hidden pl-2 pr-2'>
                                Lorem ipsum dolor sit amet . . .
                                
                            </p>
                      </div>
                      
                      <div className='flex flex-row'>
                          <p className='underline decoration-dotted pl-2 font-semibold'>Read more -&gt;</p>
                      </div>
                
                    <div className='grid grid-cols-2 auto-rows-auto ml-2 mt-4 mb-4 '>
                        <p className='font-extralight'>0sec ago</p>
                        <MdBookmark className=' h-5 w-5 self-center text-right justify-self-end mr-7'/>
                    </div>
                          
                  </div>

                  
                {/**
                   * This Fifth fav-Card ends here!!!
                   *
                   * 
                   * then the all_the_rest_blogggs card starts
                   */}

                     
            </div>

            <div className='all_the_rest_blogggs row-start-2 row-span-2 col-start-1 col-span-2'>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ab fugit tempora magnam! Modi a autem minima, nostrum eaque assumenda provident praesentium, porro vero, ex delectus natus facere rerum sequi!
                </p>
            </div>
          </div>


          <div>
            <PeopleTrendYourtopic />
              
          </div>

    </div>
      
  )
}

export default Feeds