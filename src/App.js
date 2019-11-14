import React, {Component} from 'react';
import './App.css';
import Lifecycle from './Lifecycle';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showLifeCycleComponet: true
    }
  }
      handleToggleShowLifeCycleComponent = () =>{
        this.setState({
          showLifeCycleComponet: !this.state.showLifeCycleComponet
        })
      }
  render(){
  return (
    <div className="App">
      <h1>This is new project-lifecycle methods</h1>
      <button onClick={this.handleToggleShowLifeCycleComponent}>{""} click to show life cycle method</button>
{this.state.showLifeCycleComponet ?
  (<Lifecycle />) : <div></div> }
    </div>
  );
  }
}

export default App;
