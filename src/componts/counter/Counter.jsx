import React, { useState } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
function Counter(props) {
    let [counter, setCounter] = useState(props.value)

    const increaseCounter = () => {
        setCounter(++counter);
    }
    const decreaseCounter = () => {
        setCounter(--counter);
    }
    return (
        <div>
            <h1>Counter</h1>
            <h1>{counter}</h1>
            <button className='btn btn-primary mx-2' onClick={increaseCounter}><AiFillPlusCircle /></button>
            <button className='btn btn-danger mx-2' onClick={decreaseCounter}><AiFillMinusCircle /></button>

        </div>
    )
}

export default Counter