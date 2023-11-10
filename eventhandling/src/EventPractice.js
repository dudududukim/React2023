import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: '',
        userName: ''
    };
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
            //input name에 설정한 state명을 불러와서 그 값의 변화일때 그 target value를 저장
        });
    }



    handleClick() {
        alert(this.state.userName + ":  " + this.state.message);
        this.setState({
            message: '',
            userName: ''
        });
    }

    handleKeyPressed = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="Say anything"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='userName'
                    placeholder='User Name'
                    value={this.state.userName}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPressed}
                />
                <button onClick={this.handleClick}>confirmed</button>
            </div>
        );
    }
}

export default EventPractice;
