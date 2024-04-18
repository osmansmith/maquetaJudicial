import style from './assets/css/login-style.module.scss'
import justicia from './assets/img/justicia-login.jpg'
import Button from 'react-bootstrap/Button'

const Login = () => {
  const redirection = () => {
    location.href = '/Administrador'
  }

  return (
    <>
      <div className={style.content}>
        <div className={style.card}>
          <div id={style.login}>
            <h1>Inicio de sessión</h1>
            <img src={justicia} alt="" />
            <div className={style.inputField}>
              <input type="text" id={style.user} required />
              <div className={style.underline}></div>
              <label>Nombre de usuario</label>
            </div>
            <div className={style.inputField}>
              <input type="password" id={style.pass} required />
              <div className={style.underline}></div>
              <label>Contraseña</label>
            </div>
            <Button variant="flat" onClick={redirection}>
              Ingresar
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
