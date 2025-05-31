import Item from "../component/Item"
import { useLoaderData } from "react-router-dom"
function ItemPage() {

  const item = useLoaderData()

  return (
    <div>
      <Item item = {item}/>
    </div>
  )
}

  const itemLaoder = async ({params}) => {
      const res = await fetch(`/api/products/${params.id}`)
      const data = await res.json()
      return data
  }

export {ItemPage as default , itemLaoder}
