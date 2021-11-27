import React from'react'
import cl from './Component.module.css'


const FooterComponent =(props)=>{
    return(
        <div className={cl.component}>
            <p class="float-end">
                <a href="#"><h6>{props.adres}</h6></a>  
                <i>{props.citi}</i>
            </p>
        </div>
    )
}
export default FooterComponent