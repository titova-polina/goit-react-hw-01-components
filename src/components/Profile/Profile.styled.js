import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Section = styled.section`
  margin-top: 50px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 8px;
  background-color: #f1f1f1;
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #807e7d;
  height: 50px;
  border-radius: 0 0 8px 8px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-top: 1px solid #363535;
  border-right: 1px solid #363535;
  width: calc(100% / 3);

  &:last-child {
    border-right: none;
  }
`;
