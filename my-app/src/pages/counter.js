import React, {useState} from "react";

const Counter = () => {
    const [num, setNumber] = useState(0); 
    // const [변수, 세터함수] = useState(0); 
    // 세터함수를 통해서만 변수의 값을 변경해야 반영이 됨

    const increase = () => {
        setNumber(num + 1);
    }
    
    const decrease = () => {
        setNumber(num - 1);
    }

    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )

}

export default Counter;