import { FaGithub } from "react-icons/fa"
import { NavLink } from "react-router-dom"
function Footer() {
  return (
    <div >
       <div className=' ta-center fc-white bg-black fs-md p-05'>
          <p className="d-none-item">Soheil Zaremehrjardi</p>
          <NavLink to="https://github.com/Soheil7100Z?tab=repositories" target='_blank'>
            <FaGithub className="mt-1 fs-xl fc-white hover m-0" />
          </NavLink>

       </div>
    </div>
  )
}

export default Footer
