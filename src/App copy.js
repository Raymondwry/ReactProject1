import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      arr : [
        {
          id: 0,
          details: "0",
          completed: false
        },
        {
          id: 1,
          details: "1",
          completed: false
        },
        {
          id: 2,
          details: "2",
          completed: false
        },
        {
          id: 3,
          details: "3",
          completed: false
        },
        {
          id: 4,
          details: "4",
          completed: false
        },
        {
          id: 5,
          details: "5",
          completed: false
        },
        {
          id: 6,
          details: "6",
          completed: false
        },
        {
          id: 7,
          details: "7",
          completed: false
        },
        {
          id: 8,
          details: "8",
          completed: false
        },
        {
          id: 9,
          details: "9",
          completed: false
        },
        {
          id: 10,
          details: "10",
          completed: false
        },
        {
          id: 11,
          details: "11",
          completed: false
        }
      ],
      range : 5
    }
  }
  checkboxChangeHandler = (index, event) => {
    let obj = JSON.parse(JSON.stringify(this.state.arr[index]));
    obj.completed = !obj.completed;
    this.setState({ arr :  [...this.state.arr.slice(0, index),
      obj,
      ...this.state.arr.slice(index + 1)], 

      
  });
}
  clickHandler = () => {
    this.setState({range: this.state.range + 5})
  }
  render(){
    return(
      <div>
        <ul>
          {this.state.arr.map((ele,index) => {
            if(index < this.state.range) 
              return (<div>
                      <input type="checkbox" checked={this.state.arr[index].completed} onChange={(e)=>this.checkboxChangeHandler(index,e)}/>
                      {ele.details}
                    </div>) ;
          })}
        </ul>
        <button onClick = {this.clickHandler}>show more</button>
      </div>
    )
  };
}
export default App;
