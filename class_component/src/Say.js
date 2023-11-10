import React, {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => {setMessage('Hello')};
    const onClickLeave = () => {setMessage('Bye')};

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>Entered</button>
            <button onClick={onClickLeave}>Leaved</button>
            <h1 style={{color}}>{message}</h1>
            <br></br>
            <button style={{color: 'red'}} onClick={()=>{setColor('red')}}>Red</button>
            <button style={{color: 'green'}} onClick={()=>{setColor('green')}}>Red</button>
            <button style={{color: 'blue'}} onClick={()=>{setColor('blue')}}>Red</button>
        </div>
    );
};

export default Say;