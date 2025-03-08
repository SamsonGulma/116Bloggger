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
import PennyBlogggsPage from './Pages/PennyBlogggsPage';
import NotFoundPage from './Pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayouts/>}>
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/pennyblogggs' element={<PennyBlogggsPage/>} />
      <Route path='/notifications' element={<NotificationsPage/>} />
      <Route path='/bookmarks' element={<BookmarksPage/>} />
      <Route path='/writebloggg' element={<WriteBlogggPage/>} />
      <Route path='*' element={<NotFoundPage/>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}/>
}

export default App
