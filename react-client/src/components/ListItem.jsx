import React from 'react';
import TaskButtons from './TaskButtons.jsx';

const ListItem = (props) => 
{ 
  return(
  <div>
    <h4>{ props.task.taskName } </h4> 
    <h5>Status: {props.task.status}  </h5>
    <h5>Points: {props.task.points} </h5>
    <p>{ props.task.description } </p>
    <TaskButtons task = {props.task} updateStatus = {props.updateStatus} />
  </div>
  )
}

export default ListItem;