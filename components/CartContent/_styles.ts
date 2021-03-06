import styled from 'styled-components';
import { ListItem } from '@material-ui/core';

const Container = styled.div`
  padding: 15px;
  width: min-content;
`;

const ItemContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  min-width: 500px;
  
  h6 {
    font-size: 1rem;
    flex-basis: 15%;
    text-align: right;
  }
  
  h6:first-child {
    flex-basis: 50%;
    text-align: left;
  }
  
  div {
    flex-basis: 15%;
  }
`;

const TotalContainer = styled.div`
  display: flex; 
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 500px;
  
  h6 {
    font-size: 1rem;
  }
`;

const CartListItem = styled(ListItem)`
&&& {
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid rgba(0,0,0,0.4);
}
`;

export const Styled = {
  Container,
  ItemContainer,
  TotalContainer,
  CartListItem,
};
