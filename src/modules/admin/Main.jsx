import { Outlet, useLocation } from 'react-router-dom'
import TopMenu from './top-menu'
import css from './assets/css/admin.module.scss'
import Col from 'react-bootstrap/Col'

const Main = () => {
  const location = useLocation()
  const loc = location.pathname.split('/')
  return (
    <>
      <Col md={8} sm={8} lg={9} xl={9} xxl={10} className="p-0">
        <TopMenu />
        <main className="px-4 pt-3">
          <p id={css.breadcrums}>
            Admin Pro {loc[2] == undefined ? '/ Escritorio' : '/ ' + loc[2]}
          </p>
          <Outlet />
        </main>
      </Col>
    </>
  )
}
export default Main
