import {FaReact} from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

function Navbar({itemsCollector}) {
  return (
    <div className='d-flex jc-space ai-center bg-black fc-white p-1'>
      <div className='d-flex jc-center ai-center '>
        <NavLink to='/' className='fc-white'><FaReact className='fs-2xl mr-1 hover fs-md-789'/></NavLink>
        <div><NavLink to='/' className='textDeco-none mt-1 fs-lg fc-white underLine fw-bold d-none-item'>Produkten</NavLink></div>
      </div>
       <NavLink to='/cart' className='d-flex textDeco-none fc-white'><div className='d-flex ai-center jc-center fs-sm  bg-red p-05 borderR-50p w-h-Shop'>{itemsCollector}</div><FaCartShopping className='fs-2xl fs-md-789'/></NavLink>
    </div>
  )
}

export default Navbar
