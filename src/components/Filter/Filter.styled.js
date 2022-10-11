import styled from 'styled-components';

export const Label = styled.label`
  span {
    padding-left: ${p => p.theme.space[2]}px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const Field = styled.input`
  display: block;
  width: 60%;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.s};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.sm};

  :hover,
  :focus {
    box-shadow: ${p => p.theme.shadows.secondary};
  }
`;
