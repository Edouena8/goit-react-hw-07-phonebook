import styled from '@emotion/styled';

export const FilterWrap = styled.label`
  display: flex;
  gap: 4px;
`;

export const FilterInput = styled.input`
display: inline-block;
margin: 10px 20px;
padding: 10px 30px;
  height: 20px
  max-width: 300px;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: inset 0 2px 10px 1px rgba(0, 0, 0, 0.3),
    inset 0 0 0 60px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.08);
  color: #ccc;
  transition: 0.5s linear;

  &:focus {
    outline: none;
    box-shadow: inset 0 1px 3px 1px rgba(0, 0, 0, 0.5),
      inset 0 0 0 60px rgba(0, 0, 0, 0), 0 1px rgba(255, 255, 255, 0.08);
  }
`;
