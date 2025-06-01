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
        if(!res.ok) {
            throw new Response ('Error', {
              status: res.status,
              statusText: res.statusText,
            })
        }
      const data = await res.json()
      return data
  }

export {ItemPage as default , itemLaoder}
