import css from './assets/css/admin.module.scss'
import accountCircle from './assets/img/account_circle_black_24dp.svg'

const TopMenu = () => {
  return (
    <>
      <div
        className={`${css.topMenu} shadow-sm d-flex flex-row justify-content-end align-items-center column-gap-2 pe-3`}
      >
        <p id={css.role}>Abogado</p>
        <p id={css.name}>Matt Murdock</p>
        <img src={accountCircle} alt="accountCircle" />
      </div>
    </>
  )
}

export default TopMenu
