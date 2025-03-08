import {useState, useEffect} from 'react'
import FavoriteTopicsHero from './FavoriteTopicsHero'


const FavoriteTopicsListings = ({ isHome = false }) => {
  const [blogggs, setBlogggs] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const fetchBlogggs = async () => {
      try {
        const res = await fetch("http://localhost:3000/blogggs")
        const data = res.json()
        console.log('Fetched Data:', data)
        setBlogggs(data);
      } catch (error) {
        console.log('Error Fetching the Data: ', error)
      } finally {
        setLoading(false);
      }
    }

    fetchBlogggs();
  }, [])
  
  useEffect(() => {
    console.log("blogggs:", blogggs); // Check if it's an array
  }, [blogggs]);
  
  console.log(Array.isArray(blogggs))

  //const pennyblogggs = isHome ? blogggs.slice(0, 4) : blogggs
  return (
      <div key={''} className='flex flex-col  '> 
          <h1 className='text-2xl font-semibold pb-7'>Penny Blogggs</h1>
      {
              Array.isArray(blogggs) && blogggs.length > 0 ? (blogggs.map((bloggg) => (
                  <FavoriteTopicsHero key={bloggg.id} bloggg={bloggg} />
              )))
          : <p>
            No penny blogggs to show for now.
          </p>
              
          }
                                    
        </div>
        
          
  )
}

export default FavoriteTopicsListings