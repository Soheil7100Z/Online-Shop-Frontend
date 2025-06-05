import { useQuery } from "@tanstack/react-query"
import { BiSolidError } from "react-icons/bi";
import { ClipLoader } from "react-spinners"
import CartItems from "./CartItems";
function Cart() {

  const {
    data: cartList,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['cartList'],
    queryFn: async () => {
      const res = await fetch('/api/updatedCart')
      if (!res.ok) {
        const errorCatching = await res.json()
        throw new Response (JSON.stringify(errorCatching), {
          status: res.status,
          statusText: errorCatching.message
        })
      }
      const data = await res.json()
      console.log(data)
      return data
    }
  })
  if (isLoading) {
    return (
      <div className='h-vp d-flex jc-center ai-center'>
        <ClipLoader className='w-hSpinner'/>
      </div>
    )
  }

  if (isError) {
   return (
     <div className="ta-center pt-5">
       <BiSolidError className="fs-5xl fc-red"/>
       <p className="mt-1 mb-1 fs-xl fw-bold">Status: {error.status}</p>
       <p className="fs-lg">{ error.statusText ||  'Ein Problem ist auf dem Server aufgetreten. Bitte versuchen Sie es später erneut'}</p>
     </div>
   )}







  return (
    <div className=" minh-vp d-grid gridTC">
      {cartList.map((item , id) => (
          <CartItems key = {id} item = {item} />
      ))}
    </div>
  )
}

export default Cart
