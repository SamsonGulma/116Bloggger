import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import './assets/Styles/App.css'

const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/about' element={ <h1>Blogggggg</h1> } />)
);

function App() {
  return <RouterProvider router={router}/>
}

export default App
