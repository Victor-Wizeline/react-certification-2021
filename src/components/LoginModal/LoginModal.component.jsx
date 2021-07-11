import React, { useState } from 'react';
import {
  Modal,
  LoginForm,
  CloseButton,
  Input,
  LoginButton,
  ErrorMessage,
} from './LoginModal.styled';
import { useAppContext } from '../../state/AppProvider';
import login from './login.api';
import BlurEffect from '../Effects';

const LoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { dispatch } = useAppContext();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (username.trim().toLowerCase() === 'wizeline' && password.trim() === 'Rocks!') {
      try {
        login(username.trim(), password.trim()).then((data) => {
          dispatch({
            type: 'SET_AUTH_USER',
            payload: data,
          });
        });
      } catch (err) {
        console.error(err);
      }
      onClose();
    } else {
      setError('The username or the password are incorrect');
    }
  };

  return (
    <>
      <BlurEffect show={isOpen} onClick={onClose} />
      <Modal isOpen={isOpen}>
        <h1>Login</h1>
        <LoginForm onSubmit={handleLogin}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="username">
            Username:
            <br />
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="username"
              onChange={handleUsernameChange}
              value={username}
              required
            />
          </label>
          <br />
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="password">
            Password:
            <br />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              onChange={handlePasswordChange}
              value={password}
              required
            />
          </label>
          <br />
          <LoginButton type="submit">LogIn</LoginButton>
          <br />
        </LoginForm>
        <ErrorMessage>{error}</ErrorMessage>
        <CloseButton type="button" onClick={onClose}>
          &times;
        </CloseButton>
      </Modal>
    </>
  );
};

export default LoginModal;
