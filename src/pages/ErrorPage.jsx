import { useRouteError } from "react-router-dom";
import { BiSolidError } from "react-icons/bi";

export default function ErrorPage() {
  const error = useRouteError()
return (
    <div className="ta-center pt-5 h-vp">
      <BiSolidError className="fs-5xl fc-red"/>
      <p className="mt-1 mb-1 fs-xl fw-bold">Status: {error.status}</p>
      <p className="fs-lg">{ 'Ein Problem ist auf dem Server aufgetreten. Bitte versuchen Sie es später erneut' || error.statusText}</p>
    </div>
  )
}
