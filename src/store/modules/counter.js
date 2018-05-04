import { createAction, handleActions } from 'redux-actions';
// 카운터 관련 상태 로직
//액션 타입 정의
//하나의 파일에 액션과 리듀서를 모두 작성하는것을 Ducks구조라고 한다. - 리덕수 관련 코드를 기능별로 하나의 파일로 나눠서 작성한다.
//액션 이름을 만들 때는 const를 사용하여 레퍼런스에 문자열을 담는데 앞에 도메인을 추가하는 방식으로 서로다른 모듈에서 동일한 액션 이름을 가질 수 있게된다.
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

//액션 생성함수 만들기
//이 함수들은 나중에 다른파일에서 불러와야하므로 내보내준다.
export const increment = () => ({type : INCREMENT});
export const decrement = () => ({type : DECREMENT});

//모듈의 초기상태를 정의한다.
const initialState = {
  number: 3
};

//리듀서를 만들어서 state 객체를 내보낸다.
//첫번째 파라미터는 액션을 처리하는 함수들로이뤄진 객체이고
//두번쨰 파라미터는 초기 상태
  //액션 객체를 참조하지 않으니까 이렇게 생략 가능.
  //state 부분에서 비구조화 할당도 해줄 수 있다.
/*
export default function reducer(state = initialState, action) {
  // 리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환합니다.
  // state = initialState 이렇게 하면 initialState 가 기본 값으로 사용됩니다.
  switch(action.type) {
    case INCREMENT:
      return { number: state.number + 1 };
    case DECREMENT:
      return { number: state.number - 1 };
    default:
      return state; // 아무 일도 일어나지 않으면 현재 상태를 그대로 반환합니다.
  }
}
*/

export default handleActions({
  [INCREMENT]: ({number}) => ({number:number+1}),
  [DECREMENT]: ({number}) => ({number:number-1})
}, initialState);
