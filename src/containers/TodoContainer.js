import React, { Component } from 'react';
import Input from '../components/Input';
import List from '../components/List';
import { connect } from 'react-redux';
import *  as todoActions from '../store/modules/todo';

class TodoContainer extends Component { 

    handleChange = (e) => {
        const { TodoActions } = this.props;
        TodoActions.changeInput(e.target.value);
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
    changeInput: () => dispatch(todoActions.changeInput)
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);