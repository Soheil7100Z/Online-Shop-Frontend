
function Item({item , settingCollector}) {

  const addingItem = () => {
    settingCollector((precCollector) => (precCollector + 1))
  }

  return (
    // <div className="d-flex jc-center ">
      <div className=" container h-item d-flex ai-center jc-center borderR-05 ">
      <img className=" h-75p bg-gray p-3 borderR-1 boxShadow" src={`${item.image}`} alt="" />
      {/* <div className="w-60p h-25 bgS-contain bgR-none bgP-center " style={{backgroundImage: `url(${item.image})`}}></div> */}
      <div className="minH-2 minH-30 d-flex flex-col jc-space ml-10">
        <p className="fs-3xl fw-bold ">{item.brand}</p>
        <div className="">
          <p className="fs-lg mb-05 fw-bold">{item.name}</p>
          <p>{item.description}</p>
          <p className="mt-2 fs-lg fw-bold">Preis: {item.price} € </p>
        </div>
        <div> <button className="mt-1 bg-black fc-white fs-md fw-bold hover p-05-1 border-none borderR-03" onClick={addingItem}>In den Warenkorb</button></div>
      </div>
    </div>
    //  </div>
  )
}

export default Item
