import React from 'react'
import Footercomponent from './Footercomponent'
import cl from './Component.module.css'
const Footer = ()=>{
    let info = [{s:'м.Пустомити', a:'Адреса'},{s:'+38000000', a:'Номер телефону'},{s:'dsfhkj@gmail.com', a:'Електронна адреса'}]
    return(
   <div className={cl.footer}>
        <h2>Наші контакти</h2>

        <div className={cl.footer2}>
            {info.map((inf)=><Footercomponent citi ={inf.s} adres={inf.a}/>)}
        </div>
    </div>
    )
}
export default Footer