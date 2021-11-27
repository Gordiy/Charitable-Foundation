
import React, { useState } from 'react'
import './Modal.css'
const Modalwindow = (props)=>{
    console.log('work');
    

    return(           
    <div className= {props.mod?'modalactive':'modal'} onClick={()=>props.setmod(!props.mod)}>
        <div className='important' onClick={(e)=>e.stopPropagation()}>
            <form>
                <input></input>
                <input></input>
                <button >add</button>
            </form>
        </div>
    </div>
        
    );
        
}
export default Modalwindow