import React from 'react';
// Styles
import { Wrapper } from './Button.styles';

const Button = ({ text, callback}) => (
    <Wrapper type="Button" onClick={callback}>
        {text}
    </Wrapper>
)

export default Button;