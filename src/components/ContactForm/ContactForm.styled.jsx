import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';

export const FormWrap = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const LabelWrap = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LabelText = styled.span`
  font-size: 15px;
  color: #fff;
`;

export const FormInput = styled(Field)`
  display: block;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 10px;
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

export const ModalBtn = styled.button`
  width: 140px;
  text-decoration: none;
  display: inline-block;
  margin: 10px 20px;
  padding: 10px 30px;
  position: relative;
  border: 2px solid #63009c;
  color: #63009c;
  font-family: 'Montserrat', sans-serif;
  transition: 0.4s;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    border: 2px solid rgba(0, 0, 0, 0);
    transition: 0.4s;
  }
  &:hover:after {
    border-color: #63009c;
    width: calc(100% - 10px);
    height: calc(100% + 10px);
  }
`;

export const ErrorText = styled(ErrorMessage)`
  color: #8b0000;
`;