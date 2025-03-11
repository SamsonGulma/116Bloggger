import {useState, useEffect} from 'react'
import FavoriteTopicsHero from './FavoriteTopicsHero'


const FavoriteTopicsListings = ({ isHome = false }, ) => {
  const [blogggs, setBlogggs] = useState([]);
  const [loading, setLoading] = useState([]);
  
      useEffect(() => {
        fetch("http://localhost:3000/blogggs")
            .then((res) => res.json())
            .then((data) => {
                setBlogggs(data);
                setLoading(false);
            })
            .catch((error) => console.log(error));
      }, []);
    
  
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