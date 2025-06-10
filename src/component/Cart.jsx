import { useQuery , useQueryClient } from "@tanstack/react-query"
import { BiSolidError } from "react-icons/bi";
import { ClipLoader } from "react-spinners"
import CartItems from "./CartItems";
import { useState } from "react";
import { BsFillCartXFill } from "react-icons/bs"
import { NavLink } from "react-router-dom";

function Cart({settingIDsCollector , settingCollector}) {
  const queryClient = useQueryClient()
  const [cartDeleted , settingDEl] = useState(false)

  const {
    data: cartList,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['cartList'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/updatedCart`)
      if (!res.ok) {
        const errorCatching = await res.json()
        throw new Response (JSON.stringify(errorCatching), {
          status: res.status,
          statusText: errorCatching.message

        })
        return
      }
      const data = await res.json()
      // console.log(data)
      return data
    },
    retry: false
  })

  const deletingCart = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/deleteCart` , {
      method: 'DELETE',
      headers: {'Content-Type':'application/json'}
    })
    if (!res.ok) {
      const errorCatching = await res.json()
      throw new Response(JSON.stringify(errorCatching) , {
        status: res.status,
        statusText: errorCatching.message
      })
    }

    queryClient.invalidateQueries(['cartList']);
    const info = await res.json()
    // console.log(info)
    if (info) {
      settingDEl(true)
    }
    settingCollector(0)
    const emptyarray = []
    settingIDsCollector(emptyarray)
  }

  if (isLoading) {
    return (
      <div className='h-vp d-flex jc-center ai-center'>
        <ClipLoader className='w-hSpinner'/>
      </div>
    )

  }

  if (isError && cartDeleted === false) {
   return (
     <div className="ta-center pt-5 h-vp">
       <BiSolidError className="fs-5xl fc-red"/>
       <p className="mt-1 mb-1 fs-xl fw-bold">Status: {error.status}</p>
       <p className="fs-lg">{ error.statusText ||  'Ein Problem ist auf dem Server aufgetreten. Bitte versuchen Sie es später erneut'}</p>
     </div>
   )}



  return (
    <>

    {cartDeleted
    ?
    <div className="h-vp d-flex flex-col jc-center ai-center min-h-vp">
      <BsFillCartXFill className="fc-red fs-5xl mb-1"/>
      <p className="fs-md ta-center">Ihr Warenkorb wurde erfolgreich entfernt</p>
      <NavLink to='/' className='textDeco-none mt-1 fs-md fc-Lblue underLine fw-bold'>Weiter einkaufen</NavLink>
    </div>
    :
    <div>
        <div className="h-Cart d-grid gridTC">
          {cartList.map((item , id) => (
              <CartItems key = {id} item = {item} />
          ))}
        </div>
      <div className="ta-center mt-1">
        <div><NavLink to='/' className='textDeco-none bg-black fc-white fs-md fw-bold hover p-05-1 border-none borderR-03'>Zurück zu Produkten</NavLink></div>
        <button onClick={deletingCart}
        className=" mt-1 mb-1 bg-red fc-white fs-md fw-bold hover p-05-1 border-none borderR-03">Warenkorb leeren</button>
      </div>
    </div>
      }

    </>
  )
}

export default Cart
