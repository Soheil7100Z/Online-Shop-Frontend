

function CartItems({item}) {
  return (
     <div className=" container d-flex ai-center jc-center ">
      <div className="p-05 boxShadow"><img className="w-h-10" src={`${item.image}`} alt={`${item.description}`} /></div>
      <div className="ml-2">
        <div className="fs-n fw-bold mb-05">{item.name}</div>
        <p className="fs-n">{item.price} €</p>
      </div>
    </div>
  )
}

export default CartItems
