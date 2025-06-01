import { BiSolidError } from "react-icons/bi";

function NotFoundPage() {
  return (
    <div className="ta-center pt-5">
        <BiSolidError className="fs-5xl fc-red"/> <br />
        <p className="mb-1 fs-lg fw-bold">Seite nicht gefunden</p>
        <p>Die angeforderte Seite existiert nicht oder wurde verschoben</p>
    </div>
  )
}

export default NotFoundPage
