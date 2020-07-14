import React from 'react';
import { ButtonWrapper } from './styles/ButtonWrapper';

function Button ({ variant, children }) {
  return (
    <ButtonWrapper variant={variant}>
      {children}
    </ButtonWrapper>
  )
}

export default Button;