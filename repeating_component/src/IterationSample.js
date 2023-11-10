import React, { useState } from 'react';

const IterationSample = () => {
    const [name, setName] = useState([
        { id: '1', text: 'Snowman' },
        { id: '2', text: 'Ice' },
        { id: '3', text: 'Snow' },
        { id: '4', text: 'Wind' },
    ]);
    const [inputText, setInputText] = useState('');
    const [removingText, setRemvoingText] = useState('');
    const [nextId, setNextId] = useState(5); //new array adding index

    const onChange = (e) => setInputText(e.target.value);
    const onChange2 = (e) => setRemvoingText(e.target.value);

    const onClick = () => {
        const nextNames = name.concat({
            id: nextId,
            text: inputText,
        });
        //nextNames에 새로운 id와 text를 가지는 배열을 만듬
        setNextId(nextId + 1);
        setName(nextNames);
        //배열 갈아낌
        setInputText('');
    };

    const onClick2 = () => {
        const newNames = name.filter(name=> name.text !== removingText);
        setNextId(nextId-1);
        setName(newNames);
        setRemvoingText('');
    };

    const remove = id => {
        const newNames = name.filter(name => name.id !== id);
        setNextId(nextId-1);
        setName(newNames);
        setRemvoingText('');

    }

    const nameList = name.map((name) => <li key={name.id} onDoubleClick={()=>{remove(name.id)}}>{name.text}</li>);

    return (
        <div>
            <ul>{nameList}</ul>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>Add</button>
            <br />
            <input value={removingText} onChange={onChange2} />
            <button onClick={onClick2}>Remove</button>
        </div>
    );
};

export default IterationSample;
