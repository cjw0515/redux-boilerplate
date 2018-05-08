import React, { Component } from 'react';
import Input from '../components/Input';
import List from '../components/List';

class TodoContainer extends Component { 
    render(){
        return(
            <div>
                <Input/>
                <List/>
            </div>
        )
    }
}

export default TodoContainer;