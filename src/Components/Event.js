
import React, { useState } from "react";
export const Event = () => {
    const [bg, setBg] = useState("red");
    const [text, setText] = useState("Click Me");
    const changeBg = () => {
        const bg = "pink";
        const text = "hello";
        setBg(bg);
        setText(text);
    }
    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <button onClick={changeBg}>{text}</button>
            </div>
        </>
    )
}