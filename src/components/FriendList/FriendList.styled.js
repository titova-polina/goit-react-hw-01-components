import styled from 'styled-components';

export const List = styled.ul`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  max-width: 250px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  text-align: center;
  background-color: #f1f1f1;
  width: 100%;
  margin-bottom: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 8px;
  padding: 8px 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const getColor = ({ $isOnline }) => ($isOnline ? 'green' : 'red');

export const OnlineCircle = styled.span`
  margin-right: 20px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${getColor};
`;

export const Text = styled.p`
  margin-left: 8px;
`;
