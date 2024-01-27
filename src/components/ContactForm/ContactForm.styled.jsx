import styled from 'styled-components';

export const FormTitle = styled.h3`
  margin-bottom: 20px;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 30px;
`;

export const FormInput = styled.input`
  max-width: 400px;
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  padding: 2px 20px;

  border: solid 2px #ff0012;
  border-radius: 6px;
  background-color: inherit;

  outline: none;

  font-size: 18px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: #ff0012;
  &:hover,
  &:focus {
    border: solid 2px #3c322d;
  }
`;

export const FormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  width: 100%;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 0px;
  cursor: pointer;

  border-radius: 6px;
  color: #ffffff;
  background: linear-gradient(
    180deg,
    rgba(255, 13, 0, 1) 0%,
    rgba(0, 0, 0, 0.86) 100%
  );
  box-shadow: 0px 7px 27px -2px rgba(253, 88, 140, 0.35);
  border: inherit;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 30px;

  &:hover,
  &:focus {
    border: solid 1px #ff0000;
    color: #f00707;
    background: #ffffff;
    filter: drop-shadow(10px 15px 25px rgba(232, 183, 183, 0.45));
  }
`;
