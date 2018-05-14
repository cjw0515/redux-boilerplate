import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
//createActions를 통하여 만든 액션함수에 파라미터를 넣어서 호출하면 자동으로 payload라는 이름으로 통일되어 설정된다.
export const changeInput = createAction(CHANGE_INPUT, value => value);

const initialState = {
    input: ''
};

export default handleActions({
    [CHANGE_INPUT]: (state, action) => {input: action.payload}
}, initialState);