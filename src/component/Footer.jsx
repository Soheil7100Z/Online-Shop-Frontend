import { FaGithub } from "react-icons/fa"
import { NavLink } from "react-router-dom"
function Footer() {
  return (
    <div >
       <div className=' ta-center fc-white bg-black fs-md p-1'>
          <p>Erstellt von soheil Zaremehrjardi mit React und Node.js</p>
          <p>Sie finden mehr Projekte unter meinem Github</p>
          <NavLink to="https://github.com/Soheil7100Z?tab=repositories" target='_blank'>
            <FaGithub className="mt-1 fs-2xl fc-white hover" />
          </NavLink>

       </div>
    </div>
  )
}

export default Footer
