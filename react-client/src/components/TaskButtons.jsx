import React from 'react';

const Taskbuttons = (props) => 
{

    return(
        <div>
        <p>
            {props.task.status !== 'Failed' && <button  onClick = 
            {()=>props.updateStatus({status:'Failed', id: props.task.ID})}>Admit defeat.</button>}
            
            {props.task.status !== 'Pending' && <button onClick = 
            {()=>props.updateStatus({status:'Pending', id: props.task.ID})}>NOT. YET.</button>}
            
            {props.task.status !== 'Complete' && <button onClick = 
            {()=>props.updateStatus({status:'Complete', id: props.task.ID})}>Claim triumph!</button>}
        </p>
        </div>
    )
}
export default Taskbuttons;