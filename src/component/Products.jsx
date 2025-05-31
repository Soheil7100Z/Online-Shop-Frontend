import { NavLink } from "react-router-dom"

function Products({product}) {
    // console.log(product.id)
  return (
    <div className="p-2 bg-white borderR-05 boxShadow" >

        <div className=" minH-30">
          <div className="h-20 bgR-none bgP-center bgS-cover borderR-05" style={{backgroundImage: `url(${product.image})`}}></div>
          <p className="mt-2 fw-bold fs-lg"> {product.name} </p>
          <p className=""> {product.description} </p>

        </div>
        <p className="fw-bold"> Preis: {product.price} € </p>
        <NavLink to={`/products/${product.id}`}><button className="mt-3 bg-black fc-white fs-md fw-bold hover p-05-1 border-none borderR-03">Kaufen</button></NavLink>
    </div>
  )
}

export default Products
