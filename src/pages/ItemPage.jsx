import Item from "../component/Item"
import { useLoaderData } from "react-router-dom"

function ItemPage({settingCollector , getItemIDs}) {

  const item = useLoaderData()

  return (
    <div>
      <Item item = {item} settingCollector = {settingCollector} getItemIDs = {getItemIDs} />
    </div>
  )
}

  const itemLaoder = async ({params}) => {
      const res = await fetch(`/api/products/${params.id}`)
        if(!res.ok) {
            const error = await res.json()
            throw new Response (JSON.stringify(error), {
              status: res.status,
              statusText: error.message,
            })
        }
      const data = await res.json()
      return data
  }

export {ItemPage as default , itemLaoder}
