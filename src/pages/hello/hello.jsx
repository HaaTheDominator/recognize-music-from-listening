import React, { useEffect, useState } from "react";
import './hello.css';
export const Hello = () => {

    const [load, setLoad] = useState(0);

    useEffect(() => {
        const int = setInterval(blurring, 20);

        if (load >= 100) {
            clearInterval(int);
        }
    },[])

    function blurring() {
        if (load < 100) {
        setLoad(load => load + 1);
        }
}

    return (
        <div className="text-wrapper">
            <div className="loading-text-wrapper">
    <div 
        style={{opacity: `${load}%`}}
        className="loading-text">
        欢迎
    </div>
    <div style={{opacity: `${load}%`}} className="hello-img">
        
    </div>
    </div>
    <div
        style={{opacity: `${load}%`}}
        className="loading-text-tab"
    >
        从左边选择一个tab以开始
    </div>
    </div>
    )
}