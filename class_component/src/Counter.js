import React, { Component, Fragment } from 'react';

class Counter extends Component {
    state = {
        number: 0,
    };

    render() {
        const { number } = this.state;
        return (
            <Fragment>
                <h1>{number}</h1>
                <button
                    onClick={() => {
                        this.setState(
                            (prevState, props) => ({
                                number: prevState.number + 1,
                            }),
                            () => {
                                console.log('setState 종료됨');
                            }
                        );
                        //()=>({객체}) 화살표 함수로 setState에 들어갈 객체를 그대로 반환한다.
                        //setState를 이용해서 새로운 값을 넣을 수 있다.
                    }}
                >
                    +1
                </button>
            </Fragment>
        );
    }
}

export default Counter;
