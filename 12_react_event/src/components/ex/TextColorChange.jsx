import { useState } from "react";

export default function TextColorChanger() {
    const [text, setText] = useState('검정색 글씨');
    const [color, setColor] = useState('black');

    const handleRedClick = () => {
        setText('빨간색 글씨');
        setColor('red');
    };

    const handleBlueClick = () => {
        setText('파란색 글씨');
        setColor('blue');
    };

    return (
        <div>
            <h2 style={{ color: color }}>{text}</h2>
            <button onClick={handleRedClick}>빨간색</button>
            <button onClick={handleBlueClick}>파란색</button>
        </div>
    );
}