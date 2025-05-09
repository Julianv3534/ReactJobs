import {Route
  , createBrowserRouter
  , createRoutesFromElements
  , RouterProvider
} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Jobs from './pages/Jobs.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import React from 'react'
import JobPage from './pages/JobPage.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>} />
    <Route path='/jobs' element={<Jobs/>} />
    <Route path='/jobs/:id' element={<JobPage/>}/>
    <Route path='*' element={<NotFoundPage/>} />

  </Route>  
  )
);

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App