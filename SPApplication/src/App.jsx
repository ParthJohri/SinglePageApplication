import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Root from './components/Root.jsx'
import Error from './pages/Error.jsx'
function App() {
  // An array of objects
  const router = createBrowserRouter([
    { 
      path:'/',
      element:<Root/>,
      errorElement:<Error/>,
      children: [
      {path:'/',element:<Home/>},
      {path:'/contact',element:<Contact/>}
      ]
    }
  ]);
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
