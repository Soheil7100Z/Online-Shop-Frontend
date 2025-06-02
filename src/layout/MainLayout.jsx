import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

function MainLayout({itemsCollector}) {
  return (
    <div>

        <div>
          <Navbar itemsCollector = {itemsCollector} />
          <Outlet/>
        </div>
        <Footer/>


    </div>
  )
}

export default MainLayout
