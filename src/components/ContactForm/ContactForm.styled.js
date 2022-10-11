import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
`;

export const Label = styled.label`
  div {
    padding-left: ${p => p.theme.space[2]}px;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 240px;
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
