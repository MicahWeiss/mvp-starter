import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) =>{
  let score = 0;
  for(let k=0; k< props.tasks.length; k++){
    if(props.tasks[k].status === 'Complete'){
      score += props.tasks[k].points;
    } else if(props.tasks[k].status === 'Failed'){
      score -= props.tasks[k].points;
    }
  }
//   {score >= 100 && <img src="chilismap.png"/>}
  return (
    <div>
      <h3> Greetings, Ninja SampleUser! </h3>
      <p>There are { props.tasks.length } quests in your log. Your score is {score}.</p>
      {score < 100 && <p>{100 - score} points until your reward.</p>}
      {score >= 100 && <div><h1>Dine at the finest restaurant in Austin!</h1><p> #treatyoself #chilisAt45thandLammar</p><img src="chilismap.png" height = '770px' width ='770px' /></div>}
      { props.tasks.map((task, i) => 
      <ListItem task={task} key={i} updateStatus ={props.updateStatus}/>)}
    </div>
  )
}

export default List;