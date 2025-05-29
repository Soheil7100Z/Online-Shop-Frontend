import { Outlet } from "react-router-dom"
import Navbar from "../component/Navbar"


function MainLayout() {
  return (
    <div>

        <div>
          <Navbar/>
          <Outlet/>
        </div>


    </div>
  )
}

export default MainLayout
