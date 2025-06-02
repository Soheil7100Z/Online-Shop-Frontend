import { BiSolidError } from "react-icons/bi";

function NotFoundPage() {
  return (
    <div className="ta-center pt-5 h-vp">
        <BiSolidError className="fs-5xl fc-red"/> <br />
        <p className="mt-1 mb-1 fs-xl fw-bold">Seite nicht gefunden</p>
        <p className="fs-lg">Die angeforderte Seite existiert nicht oder wurde verschoben</p>
    </div>
  )
}

export default NotFoundPage
