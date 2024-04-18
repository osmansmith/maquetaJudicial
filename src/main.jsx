import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorPage from './error-page.jsx'
import Admin from './modules/admin/index.jsx'
import Escritorio from './modules/admin/pages/Escritorio.jsx'
import Causas from './modules/admin/pages/Causas.jsx'
import Clientes from './modules/admin/pages/Clientes.jsx'
import Escritos from './modules/admin/pages/Escritos.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/Administrador',
    element: <Admin />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Escritorio />,
      },
      {
        path: 'Causas',
        element: <Causas />,
      },
      {
        path: 'Clientes',
        element: <Clientes />,
      },
      {
        path: 'Escritos',
        element: <Escritos />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />,
  // </React.StrictMode>,
)
