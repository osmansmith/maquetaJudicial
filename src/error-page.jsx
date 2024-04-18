import { useRouteError } from 'react-router-dom'
import './assets/error.css'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Lo sentimos, Ha ocurrido un error inesperado.</p>
      <p>
        <i>{error.statusText + ' (' + error.status + ') ' || error.message}</i>
      </p>
    </div>
  )
}
