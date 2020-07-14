import styled from 'styled-components';

// theme.colors.primary.color;

export const ButtonWrapper = styled.button`
  background-color: ${({ theme, variant }) => theme.colors[variant].color};
  color: ${({ theme, variant }) => theme.colors[variant].contrastText};
  border-radius: ${({ theme, variant }) => theme.colors[variant].color};
  transition: ${({ theme }) => theme.commons.transition};
  border-radius: ${({ theme }) => theme.commons.buttonBorderRadius};
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  border: 0;
`;