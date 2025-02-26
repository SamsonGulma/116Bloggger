import SideNavbar from './Components/SideNavbar'
import UpNavbar from './Components/UpNavbar'
import FeedsContainer from './Components/FeedsContainer'
import './assets/Styles/App.css'
import FavoriteTopicsHero from './Components/FavoriteTopicsHero'

function App() {

  return (
    <div className=''>
      <div className='flex'>
      <UpNavbar />
      <SideNavbar />
      <FavoriteTopicsHero />
      <FeedsContainer />
      
      </div>
    </div>
      
  )
}

export default App
