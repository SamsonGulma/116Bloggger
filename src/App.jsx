import SideNavbar from './Components/SideNavbar'
import UpNavbar from './Components/UpNavbar'
import Feeds from './Components/Feeds'
import './assets/Styles/App.css'

function App() {

  return (
    <div className=''>
      <div className='flex'>
      <UpNavbar />
      <SideNavbar/>
      <Feeds/>
      </div>
    </div>
      
  )
}

export default App
