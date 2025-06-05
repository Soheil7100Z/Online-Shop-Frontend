

function CartItems({item}) {
  return (
     <div className=" container d-flex ai-center ji-center ">
      <div className="p-05 boxShadow"><img className="w-h-10" src={`${item.image}`} alt={`${item.description}`} /></div>
      <div className="ml-3">
        <div className="fs-sm fw-bold">{item.name}</div>
        <p className="fs-sm">{item.price} €</p>
      </div>
    </div>
  )
}

export default CartItems
