import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

import './App.css'
import { useState } from 'react'
import MainLayout from './layout/MainLayout'
import ErrorPage from './pages/ErrorPage'
import NotFoundPage from './pages/NotFoundPage'
import HomePage , {dataloading} from './pages/HomePage'
import ItemPage , {itemLaoder} from './pages/ItemPage'
import CartPage from './pages/CartPage'

function App() {

  const [itemsCollector , settingCollector] = useState(0)
  const [IDsCollector , settingIDsCollector ] = useState([])

  const getItemIDs = (itemID) => {
    settingIDsCollector ((prev) => {
      const updatedCartIDs = [...prev , itemID]
      cartSaving(updatedCartIDs)
      return updatedCartIDs
    })
  }
  const cartSaving = async (updatedCartIDs) => {
    try {
      const res = await fetch('/api/cart' , {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(updatedCartIDs)
      })
      if(!res.ok) {
        const error = await res.json()
        throw new Response(JSON.stringify(error) , {
          status: res.status,
          statusText: error.message
        })
      }
      const data = await res.json()
      console.log('cart saved:' , data)
    } catch (error) {
      console.log(error)
    }
  }

  const router = createBrowserRouter(
        createRoutesFromElements(
           <Route path='/' element= {<MainLayout itemsCollector = {itemsCollector} />}>
                <Route index element= {<HomePage/>} errorElement = {<ErrorPage/>} loader={dataloading}/>
                <Route path='/products/:id' element= {<ItemPage settingCollector = {settingCollector} getItemIDs = {getItemIDs}/>} errorElement={<ErrorPage/>} loader={itemLaoder}/>
                <Route path='/cart' element= {<CartPage/>} />
                <Route path='*' element= {<NotFoundPage/>} />
           </Route>
        )
    )


  return (
      <RouterProvider router = {router}/>
  )
}

export default App
