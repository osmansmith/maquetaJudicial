import React from "react";
import css from './assets/css/admin.module.scss'
import accountCircle from './assets/img/account_circle_black_24dp.svg'

const TopMenu = () => {     
    return(
        <>
        <section className={css.topMenu}>
            <p id={css.role}>Abogado</p>
            <p id={css.name}>Matt Murdock</p>            
            <img src={accountCircle} alt="accountCircle"/>
        </section>
        </>
    )
}

export default TopMenu