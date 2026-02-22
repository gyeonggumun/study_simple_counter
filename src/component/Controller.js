import { useState } from "react";

const Controller = () => {
    const [count, setCount] = useState(0);
    const handleSetCount = (value) => {
        setCount(count + value);
    };

    return (
        <div>
            <button onClick={()=> handleSetCount(-1)}>-1</button>
            <button onClick={()=> handleSetCount(-10)}>-10</button>
            <button onClick={()=> handleSetCount(-100)}>-100</button>
            <button onClick={()=> handleSetCount(100)}>+100</button>
            <button onClick={()=> handleSetCount(10)}>+10</button>
            <button onClick={()=> handleSetCount(1)}>+1</button>
        </div>
    );
};
export default Controller;