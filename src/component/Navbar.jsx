import {FaReact} from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

function Navbar({itemsCollector}) {
  return (
    <div className='d-flex jc-space ai-center bg-black fc-white p-2'>
      <NavLink to='/' className='fc-white'><FaReact className='fs-2xl mr-1 hover'/></NavLink>
      <NavLink to='/cart' className='d-flex textDeco-none fc-white'><div className='d-flex ai-center jc-center fs-sm  bg-red p-05 borderR-50p w-h-Shop'>{itemsCollector}</div><FaCartShopping className='fs-2xl'/></NavLink>
    </div>
  )
}

export default Navbar
