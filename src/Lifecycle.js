import React, { Component } from 'react'

 class Lifecycle extends Component {
     constructor(){
         super();

         this.state ={
             displayString: "we are in the constructor",
             counter: 0,
             didDisplayStringUpdate: true
         };
     }
     componentDidMount =()=> {
         this.setState({
             displayString: "we are in the component did mount",
             didDisplayStringUpdate: true
         })
     };
     componentDidUpdate =(prevProps, prevState) =>{
         if(this.state.didDisplayStringUpdate === true){
             console.log("the component was just updated");
             this.setState({
             counter: this.state.counter + 1,
             didDisplayStringUpdate: false
            });
         }
     }
     componentWillUnmount = ()=>{
        console.log("the component is now unmounted , Good bye!");
    };
     
    render() {
        return (
            <div>
              <h2>the lifecycle component</h2>  
        <p>the current state change:{this.state.counter}</p>
        <h4>The current display string: {this.state.displayString}</h4>
            </div>
        )
    }
}
export default Lifecycle;