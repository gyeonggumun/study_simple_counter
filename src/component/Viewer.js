import { useState } from "react";

const Viewer = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>현재 카운트: </div>
            <hi>{count}</hi>
        </div>
    );
};

export default Viewer;