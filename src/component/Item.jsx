import { useParams } from "react-router-dom"
import { NavLink } from "react-router-dom"


function Item({item , settingCollector , getItemIDs}) {
  const {id} = useParams()

  const addingItem = () => {
    settingCollector((precCollector) => (precCollector + 1))
  }

  return (
    <div>
      <div className="container h-item d-flex cole-cartItem ai-center jc-center borderR-05 pt-2-789">
      <img className=" h-75p bg-gray p-1 borderR-1 boxShadow p-0 h-min-img " src={`${item.image}`} alt="" />
      <div className="minH-20 d-flex flex-col jc-space ml-10">
        <p className="fs-2xl fw-bold d-none-item ">{item.brand}</p>
        <div>
          <p className="fs-md mb-05 fw-bold">{item.name}</p>
          <p className="fs-n d-none-item">{item.description}</p>
          <p className="mt-2 fs-md fw-bold fs-item-n m-0">Preis: {item.price} € </p>
        </div>
        <div><NavLink className="textDeco-none bg-red fc-white fs-md fw-bold hover p-05-1 border-none borderR-03 wordWrap-none fs-item-n p-item" onClick={() => (addingItem() , getItemIDs(id) ) }>In den Warenkorb</NavLink></div>
        <div><NavLink to='/' className='textDeco-none bg-black fc-white fs-md fw-bold hover p-05-1 border-none borderR-03 fs-item-n p-item'>Zum Produkten</NavLink></div>
        <div><NavLink to='/cart' className='textDeco-none bg-black fc-white fs-md fw-bold hover p-05-1 border-none borderR-03 fs-item-n p-item'>Zum Warenkorb</NavLink></div>

        </div>
    </div>
    </div>
  )
}

export default Item
