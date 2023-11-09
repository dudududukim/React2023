import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
    //react component는 대문자로 시작해야됨
    const { name, age } = props;
    return (
        <Fragment>
            <h1>{name} = Me</h1>
            <h2>{age}살 입니다</h2>
            <div>마이 뉴 띵</div>
            <div>{props.children} is here</div>
        </Fragment>
    );
};

MyComponent.defaultProps = {
    name: 'Park',
    age: '24',
};

MyComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired,
};

export default MyComponent;
