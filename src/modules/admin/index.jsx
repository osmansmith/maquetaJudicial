import css from './assets/css/admin.module.scss'
import LeftMenu from './left-menu'
import TopMenu from './top-menu'
import Content from './content'

const Admin = () => {
  return (
    <>
      <div className={css.main}>
        <LeftMenu />
        <TopMenu />
        <Content />
      </div>
    </>
  )
}

export default Admin
