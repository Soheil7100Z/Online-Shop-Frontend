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

function App() {
  const router = createBrowserRouter(
        createRoutesFromElements(
           <Route path='/' element= {<MainLayout/>}>
                <Route index element= {<HomePage/>} loader={dataloading}/>
                <Route path='/products/:id' element= {<ItemPage/>} loader={itemLaoder}/>
           </Route>
        )
    )


  return (
      <RouterProvider router = {router}/>
  )
}

export default App
