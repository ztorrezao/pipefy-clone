import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => props.done ? 0.6 : 1};

  & + div {
    border-left: 2px solid rgba(0, 0, 0, .05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
    
    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }
  
    button {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: #3f51b5;
      border: 0;
      cursor: pointer;
      transition: .3s ease-in-out;

      &:hover {
        transform: scale(1.09);
        box-shadow: 0 1px 4px 0 rgba(192, 208, 230, .8);
      }
    }
  }

  ul {
    margin-top: 30px;
  }
`;
