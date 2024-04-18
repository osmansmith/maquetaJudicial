import { Link, useLocation } from 'react-router-dom'
import css from './assets/css/admin.module.scss'
import menuBurger from './assets/img/burger.png'
import dash from './assets/img/dash.png'
import edit from './assets/img/edit.png'
import balance from './assets/img/balance.png'
import people from './assets/img/people.png'

const LeftMenu = () => {
  const active = css.active
  const location = useLocation()
  return (
    <>
      <section className={css.menu}>
        <div id={css.companyTitle}>
          <img src={menuBurger} alt="" />
          <h2>
            Admin <b>Pro</b>
          </h2>
        </div>
        <nav>
          <ul>
            <li
              className={location.pathname === '/Administrador' ? active : ''}
            >
              <img src={dash} alt="" />
              <Link to={''}>Escritorio</Link>
            </li>
            <li
              className={
                location.pathname === '/Administrador/Escritos' ? active : ''
              }
            >
              <img src={edit} alt="" />
              <Link to={'Escritos'}>Escritos</Link>
            </li>
            <li
              className={
                location.pathname === '/Administrador/Causas' ? active : ''
              }
            >
              <img src={balance} alt="" />
              <Link to={'Causas'}>Causas</Link>
            </li>
            <li
              className={
                location.pathname === '/Administrador/Clientes' ? active : ''
              }
            >
              <img src={people} alt="" />
              <Link to={'Clientes'}>Clientes</Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  )
}

export default LeftMenu
