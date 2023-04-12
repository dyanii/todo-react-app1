import React from 'react';
import { ListItem, ListItemText, InputBase, Checkbox } from "@material-ui/core"

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: props.item };
    }

    render() {
        const item = this.state.item;
        return(
            <div className='Todo'>
                <input type="checkbox" id="todo0" name="todo0" value="todo0" />
                <label for="todo01">Todo 컴포넌트 만들기</label>
                { 
                  /*   
                        comment here
                  */
                }
                { 
                   // comment1
                   // comment2
                   // comment3
                }

            </div>
            <ListItem>
                <Checkbox checked={item.done} />
                <ListItemText>
                    <InputBase 
                        inputProps={{ "aria-label": "naked" }}
                        type="text" 
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />
                </ListItemText>            
            </ListItem>

        );
    }
}
export default Todo;