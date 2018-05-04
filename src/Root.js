import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';


const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;


//store
//modules - 모듈들의 폴더
//counter.js  - 카운터에대한 상태값, 액션을 저장할 파일
//todo.js - 투두리스트에 필요한 상태값, 액션을 저장할 파일
//index.js - 모듈들을 합칠 파일
//configure - store를 만들 함수
//index - 스토어 생성
