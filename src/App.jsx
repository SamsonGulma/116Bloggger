import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import './assets/Styles/App.css'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={ <h1>My bloggg</h1>} />)
);

function App() {
  return <RouterProvider router={router}/>
}

export default App
