import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) =>{
  let score = 0;
  for(let k=0; k< props.tasks.length; k++){
    score += props.tasks[k].points;
  }

  return (
    <div>
      <h3> Greetings, Ninja SampleUser! </h3>
      There are { props.tasks.length } items. Your score is {score}.
      { props.tasks.map((task, i) => 
      <ListItem task={task} key={i} updateStatus ={props.updateStatus}/>)}
    </div>
  )
}

export default List;