import React from 'react';

class Todo extends React.Component {
    render(){
        return(
            <div className='Todo'>
                <input type="checkbox" id="todo0" name="todo0" value="todo0"></input>
                <label for="todo0">Todo 컴포넌트 만들기</label>
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