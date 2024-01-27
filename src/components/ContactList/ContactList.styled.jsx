import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  max-width: 900px;
  text-align: start;
  margin: 0 auto;
`;

export const ContactListItemsStyled = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 30px;
`;

export const DeleteBtnStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: 0;
  height: 30px;
  padding: 0px 40px;
  cursor: pointer;

  border-radius: 6px;
  color: #f31b1b;
  background: linear-gradient( 180deg, rgb(255 13 0) 0%, rgba(0,0,0,0.86) 100% )
  );
  box-shadow: 0px 7px 27px -2px rgba(253, 88, 140, 0.35);
  border: inherit;

  font-family: 'Roboto';
  font-size: 20px;

  &:hover,
  &:focus {
    border: solid 1px #f40606;
    color: #ff0012;
    background: #ffffff;
    filter: drop-shadow(10px 15px 25px rgba(232, 183, 183, 0.45));
  }
`;
