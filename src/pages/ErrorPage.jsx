import { useRouteError } from "react-router-dom";
import { BiSolidError } from "react-icons/bi";

export default function ErrorPage() {
  const error = useRouteError()
return (
    <div className="ta-center pt-5">
      <BiSolidError className="fs-5xl fc-red"/>
      <p className="mb-1 fs-lg fw-bold">Status: {error.status}</p>
      { 'Ein Problem ist auf dem Server aufgetreten. Bitte versuchen Sie es später erneut' || error.statusText}
    </div>
  )
}
