import React from "react";
import Todo from './Todo';
import AddTodo from './AddTodo.js';
import {Paper, List, Container} from "@material-ui/core";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items: [
        {id: 0, title: "Hello World 1", done: true},
        {id: 1, title: "Hello World 2", done: false},
        {id: 2, title: "Hello World 3", done: true}
      ]
    };
  }

  add= (item) => {
    const thisItems= this.state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    this.setState({items: thisItems});
    console.log( "items : ", this.state.items);
  }

  render(){
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin: 16}}>
        <List>
          {this.state.items.map((item, index) => (
            <Todo item={item} key={item.id} />
          ))}
        </List>
      </Paper>

    );
    /* this.state.items.map(
      (item, index) => (
        <Todo item={item}></Todo>  item이 하나씩 전달되는 과정임
      )
    */
    
    return (
      <div className="App">
        <Container maxWidth='md'>
          <AddTodo add={this.add} />
          <div className="TodoList">{todoItems}</div>
        </Container>
        {/* <Todo item={this.state.items} />   <Todo> 컴포넌트 여러 개 */}
        {/*todoItems*/}
      </div> 
    );
  }
  
}


export default App;
