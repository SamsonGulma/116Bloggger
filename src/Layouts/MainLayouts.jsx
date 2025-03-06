import { Outlet } from 'react-router-dom'
import SideNavbar from '../Components/SideNavbar'
import UpNavbar from '../Components/UpNavbar'
const MainLayouts = () => {
  return (
    <>
      <SideNavbar />
      <UpNavbar/>
      <Outlet/>
    </>
  )
}

export default MainLayouts