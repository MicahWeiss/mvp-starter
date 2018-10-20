import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: []
    }
    this.updateStatus = this.updateStatus.bind(this);
  }

  componentDidMount() { //hits up server for 
    $.ajax({
      url: '/api/tasks', 
      success: (data) => {
        this.setState({
          tasks: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  //updateStatus
  updateStatus(payload){
    console.log('Sending patch request');
    $.ajax({
      url: '/api/status',
      method: "PATCH",
      data: payload,
      success: (data) => {
        console.log('Response from server: ', data);
        console.log('state:', this.state);
        for(let i = 0; i< this.state.tasks.length; i++){
          console.log('comparing state id',this.state.tasks[i].ID, 'to', payload.id)
          if(this.state.tasks[i].ID === payload.id){
            console.log('id match found in state');
            let tempState = this.state;
            tempState.tasks[i].status = payload.status; //bad, but I want it
            this.setState(tempState, ()=>{console.log('state set')});
          }
        }
      },
      error: (err) => {
        console.log('err', err);
      }
    })

  }

  render () {
    return (<div>
      <h1>Task List</h1>
      <List tasks = {this.state.tasks} updateStatus = {this.updateStatus}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));