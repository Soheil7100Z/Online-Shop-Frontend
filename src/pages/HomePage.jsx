import { useLoaderData } from "react-router-dom"
import Products from "../component/Products"
function HomePage() {

  const list = useLoaderData()

  return (

  <div className="d-flex">

      <div className="container d-grid gridTC gap-2 ">
        {list.map((category , id) =>(
         category.products.map((product , id) =>(

          <Products key = {id} product = {product} />

      ))
    ))}
      </div>
  </div>

  )
}
    const dataloading = async () => {
      const res = await fetch('/api/products')
      const data = res.json()
      return data
    }
export {HomePage as default , dataloading}
