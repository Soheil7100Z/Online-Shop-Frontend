import { useLoaderData } from "react-router-dom"
import Products from "../component/Products"
import { useState } from "react"
import { GoMultiSelect } from "react-icons/go"

function HomePage() {

  const list = useLoaderData()
  let valueLabtop; let valueTablet; let valueKamera; let valuePhone; let valueMonitor;
  const [labtop , settingLabtop] = useState(false)
  labtop ? valueLabtop = 0 : ''
  // console.log(labtop , valueLabtop, typeof(valueLabtop))
  const [tablet , settingTablet] = useState(false)
  tablet ? valueTablet = 1 : ''
  const [kamera , settingKamera] = useState(false)
  kamera ? valueKamera = 2 : ''
  const [phone , settingPhone] = useState(false)
  phone ? valuePhone = 3 : ''
  const [monitor , settingMonitor] = useState(false)
  monitor ? valueMonitor = 4 : ''

  const [filter , settingfilter] = useState(true)
  return (

  <div className="d-flex">
      <div className=" d-flex jc-center w-20p bg-black fc-white fs-lg pt-5  ">
        <GoMultiSelect className="filterIcon" onClick={() => settingfilter(prestate => !prestate)}/>
        <div className={`position-fix sidebar ${filter ? 'menuClosed' : 'menuOpen'}`}>
          <input type="checkbox" value={labtop} onChange={() => settingLabtop((prestate) => (!prestate))}
          className="mr-1 trans-Scale2 chBoxbg-color mb-1" id="Labtop"/>
          <label htmlFor="Labtop" className="va-center mb-1">Labtop</label> <br />
           <input type="checkbox" value={tablet} onChange={() => settingTablet((prestate) => (!prestate))}
          className="mr-1 trans-Scale2 chBoxbg-color mb-1" id="Tablet"/>
          <label htmlFor="Tablet" className="va-center mb-1">Tablet</label> <br />
          <input type="checkbox" value={kamera} onChange={() => settingKamera((prestate) => (!prestate))}
          className="mr-1 trans-Scale2 chBoxbg-color mb-1" id="Kamera"/>
          <label htmlFor="Kamera" className="va-center mb-1">Kamera</label> <br />
          <input type="checkbox" value={phone} onChange={() => settingPhone((prestate) => (!prestate))}
          className="mr-1 trans-Scale2 chBoxbg-color mb-1" id="Smartphone"/>
          <label htmlFor="Smartphone" className="va-center mb-1">Smart phone</label> <br />
          <input type="checkbox" value={monitor} onChange={() => settingMonitor((prestate) => (!prestate))}
          className="mr-1 trans-Scale2 chBoxbg-color mb-1" id="Monitor"/>
          <label htmlFor="Monitor" className="va-center">Monitor</label>
          <div><button className="mt-1 border-none p-05-1 borderR-03 fs-n fw-bold d-none-790 " onClick={() => settingfilter(prestate => !prestate)} >Filter anwenden</button></div>
        </div>
      </div>

          {!labtop && !tablet && !kamera && !phone && !monitor

          ?
          <div className="container w-80p d-grid gridTC gap-2">
            {list.map((category , id) =>(
             category.products.map((product , id) =>(
              <Products key = {id} product = {product} />
             ))
           ))}
          </div>

          :
          <div className="container w-80p d-grid gridTC gap-2 ">
            {list.map((category , ID) =>{
              return category.products.map((product , id) =>{
              if (valueLabtop === ID || valueTablet === ID || valueKamera === ID || valuePhone === ID || valueMonitor === ID) {
                // console.log("ok")
                 return <Products key = {id} product = {product} />
              }
             })
            })}
          </div>
             }

  </div>

  )
}
    const dataloading = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`)
        if(!res.ok) {
            const error = await res.json()
            throw new Response (JSON.stringify(error), {
              status: res.status,
              statusText: error.message,
            })
        }
      const data = res.json()
      return data
    }
export {HomePage as default , dataloading}
