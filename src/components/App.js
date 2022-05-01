import React from 'react';
import axios from 'axios';

import TaskList from './TaskList';


class App extends React.Component {
  state = {
    tasks: [],
    errorMessage: ''
  }


  componentDidMount() {
    this.getData();
  }


  getData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts')
      .then(response => {
        this.setState({ tasks: response.data });
      }).catch(error => {
        this.setState({ errorMessage: error.message });
      });
  }

  onUpdateTaskList = (newTaskList) => {
    this.setState({ tasks: newTaskList });
  }

  render() {
    return (
      <div className="container">
        <body>TO DO List</body>
        <TaskList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} />
      </div>
    );
  }
}


export default App; 
