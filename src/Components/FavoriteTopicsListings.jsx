import {useState, useEffect} from 'react'
import FavoriteTopicsHero from './FavoriteTopicsHero'


const FavoriteTopicsListings = ({ isHome = false }, ) => {
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
  
  console.log(Array.isArray(blogggs), typeof (blogggs))

  const haveOne = blogggs.length > 0
  return (
      <div key={''} className='flex flex-col  '> 
      <h1 className='text-2xl font-semibold pb-7'>Penny Blogggs</h1>
      {
        loading ? (
          <p>Loading...</p>
        ) : (
            <>
              {
                      Array.isArray(blogggs) && haveOne ? (blogggs.map((bloggg) => (
                        <FavoriteTopicsHero key={bloggg.id} bloggg={bloggg} />
                      )))
                  :
                  <div>
                    <p>
                      No penny blogggs to show for now.
                    </p>
                  </div>
              }
            </>
        )
      }
                                    
        </div>
        
          
  )
}

export default FavoriteTopicsListings