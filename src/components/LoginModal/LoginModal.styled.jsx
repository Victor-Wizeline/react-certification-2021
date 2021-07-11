import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: ${(props) => (props.isOpen ? '80px' : '-700px')};
  opacity: ${(props) => (props.isOpen ? '100' : '0')};
  right: 50px;
  padding: 16px 24px;
  border-radius: 16px;
  z-index: 5000;
  width: 300px;
  height: max-content;
  background-color: ${(props) => props.theme.itemBackground};
  color: ${(props) => props.theme.fontColor};
  transition: 200ms;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  &:hover {
    box-shadow: -1px 10px 29px 0px rgba(95, 43, 43, 0.8);
`;

export const LoginForm = styled.form`
  width: max-content;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 25px;
  height: 25px;
  padding: 5px;
  cursor: pointer;
  border-radius: 50px;
  background-color: ${(props) => props.theme.shadowColor};
  color: ${(props) => props.theme.fontColor};
  border: 0px;
`;

export const Input = styled.input`
  border: 0px;
  border-radius: 100px;
  padding: 6px 12px;
  margin-bottom: 12px;
  background-color: ${(props) => props.theme.inputColor};
`;

export const LoginButton = styled.button`
  width: max-content;
  align-self: center;
  height: 25px;
  padding: 0px 25px;
  cursor: pointer;
  border-radius: 50px;
  background-color: ${(props) => props.theme.hoverColor};
  color: ${(props) => props.theme.fontColor};
  border: 0px;
`;

export const ErrorMessage = styled.small`
  font-size: 10pt;
  max-width: 200px;
  text-align: center;
`;
