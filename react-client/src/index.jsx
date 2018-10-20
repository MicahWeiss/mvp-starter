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
    this.updateStatus.bind(this);
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
    console.log('update status triggered');
    $.ajax({
      url: '/api/status',
      method: "PATCH",
      data: payload,
      success: (data) => {
        console.log('Updated status: ', data);
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