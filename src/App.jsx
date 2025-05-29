import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

import './App.css'
import MainLayout from './layout/MainLayout'
import HomePage , {dataloading} from './pages/HomePage'

function App() {
  const router = createBrowserRouter(
        createRoutesFromElements(
           <Route path='/' element= {<MainLayout/>}>
                <Route index element= {<HomePage/>} loader={dataloading}/>
           </Route>
        )
    )


  return (
      <RouterProvider router = {router}/>
  )
}

export default App
