import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import './assets/Styles/App.css';
import HomePage from './Pages/HomePage';
import MainLayouts from './Layouts/MainLayouts';
import ProfilePage from './Pages/ProfilePage';
import BookmarksPage from './Pages/BookmarksPage';
import NotificationsPage from './Pages/NotificationsPage';
import WriteBlogggPage from './Pages/WriteBlogggPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayouts/>}>
      <Route index element={<HomePage />} />
      <Route path='/bookmarks' element={<BookmarksPage/>} />
      <Route path='/notification' element={<NotificationsPage/>} />
      <Route path='/profile' element={<ProfilePage/>} />
      <Route path='/writebloggg' element={<WriteBlogggPage/>} />
        
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}/>
}

export default App
