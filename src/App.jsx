import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

import './App.css'
import { useState } from 'react'
import MainLayout from './layout/MainLayout'
import HomePage , {dataloading} from './pages/HomePage'
import ItemPage , {itemLaoder} from './pages/ItemPage'
import ErrorPage from './pages/ErrorPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  const [itemsCollector , settingCollector] = useState(0)


  const router = createBrowserRouter(
        createRoutesFromElements(
           <Route path='/' element= {<MainLayout itemsCollector = {itemsCollector} />}>
                <Route index element= {<HomePage/>} errorElement = {<ErrorPage/>} loader={dataloading}/>
                <Route path='/products/:id' element= {<ItemPage settingCollector = {settingCollector} />} errorElement={<ErrorPage/>} loader={itemLaoder}/>
                <Route path='*' element= {<NotFoundPage/>} />
           </Route>
        )
    )


  return (
      <RouterProvider router = {router}/>
  )
}

export default App
