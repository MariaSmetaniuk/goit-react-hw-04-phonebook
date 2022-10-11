import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 128px;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: 500;
  cursor: pointer;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: ${p => p.theme.shadows.primary};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.muted};
  }
`;
