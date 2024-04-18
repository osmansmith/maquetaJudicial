import React from "react";
import { Outlet,useLocation } from "react-router-dom";
import css from './assets/css/admin.module.scss'

const Content = () =>{
    const location = useLocation()
    const loc = location.pathname.split("/")    
    return(
        <>
        <section className={css.content}> 
            <p id={css.breadcrums}>Admin Pro { loc[2]==undefined ? '/ Escritorio' :'/ '+loc[2]}</p>           
            <Outlet/>         
        </section>
        </>
    )
}
export default Content