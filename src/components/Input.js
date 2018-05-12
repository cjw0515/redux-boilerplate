import React from 'react';

const Input = (props) => (
    <div>
        <input type='text' value={props.input} onChange={props.onChange} />
        <button>추가</button>
    </div>
);  

export default Input;