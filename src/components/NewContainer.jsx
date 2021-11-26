import React from 'react'
 
const NewConteiner = (props)=>{
    console.log(props);
    return (
        <div class="card shadow-sm">
            <img src={props.image} width="100%" height="225"/>
            
            <div class="card-body">
                {
                    (props.togle) ? <p>{props.mm.text}</p> : <p>{props.mm.text.slice(0,101)}...</p>
                }
                    
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary" onClick = {()=>props.settogle(!props.togle)}>{props.names}</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Долучитися</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                </div>
            </div>
        </div>     
    )   
}
export default NewConteiner;