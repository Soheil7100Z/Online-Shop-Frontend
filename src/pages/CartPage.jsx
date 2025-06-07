import Cart from "../component/cart"

function CartPage({settingIDsCollector , settingCollector}) {
  return (
    <div>
      <Cart settingIDsCollector = {settingIDsCollector} settingCollector = {settingCollector} />
    </div>
  )
}

export default CartPage
