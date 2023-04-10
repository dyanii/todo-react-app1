import React from 'react';
import {ListItem, ListItemText, InputBase, Checkbox} from "@material-ui/core";

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state={item: props.item};
    }

    render(){
        return(
            <div className='Todo'>
                <input
                type="checkbox"
                id={this.state.item.id}
                name={this.state.item.id}
                checked={this.state.item.done}
                />
                <label id={this.state.item.id}>{this.state.item.title}</label>
                {/*
                    comment here 중괄호를 둘러쌈
                */}
                {
                    //comment1
                    //comment2 슬래시는 한줄씩
                    //comment3
                }
            </div>
        );
    }

}

export default Todo; //다른 곳에서 쓰기 위해서는 꼭 써줘야됨