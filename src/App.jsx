import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

import './App.css'
import MainLayout from './layout/MainLayout'
import HomePage , {dataloading} from './pages/HomePage'
import ItemPage , {itemLaoder} from './pages/ItemPage'
import ErrorPage from './pages/ErrorPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  const router = createBrowserRouter(
        createRoutesFromElements(
           <Route path='/' element= {<MainLayout/>}>
                <Route index element= {<HomePage/>} errorElement = {<ErrorPage/>} loader={dataloading}/>
                <Route path='/products/:id' element= {<ItemPage/>} errorElement={<ErrorPage/>} loader={itemLaoder}/>
                <Route path='*' element= {<NotFoundPage/>} />
           </Route>
        )
    )


  return (
      <RouterProvider router = {router}/>
  )
}

export default App
