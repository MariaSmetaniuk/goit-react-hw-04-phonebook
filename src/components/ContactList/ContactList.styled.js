import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.sm};
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  background-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.sm};
  box-shadow: ${p => p.theme.shadows.secondary};

  span {
    font-weight: 500;
  }
`;
