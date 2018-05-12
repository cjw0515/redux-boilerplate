import React, { Component } from 'react';
import Input from '../components/Input';
import List from '../components/List';
import { connect } from 'react-redux';
import *  as TodoActions from '../store/modules/todo';

class TodoContainer extends Component { 

    handleChange = () => {
        this.props.changeInput();
    }

    render(){
        const { handleChange } = this;
        const { input } = this.props;

        return(
            <div>
                <Input
                    onChange={handleChange}
                    input={input}
                />
                <List/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    input: state.todo.input
});

const mapDispatchToProps = (dispatch) => ({
    changeInput: () => dispatch(TodoActions.changeInput)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);