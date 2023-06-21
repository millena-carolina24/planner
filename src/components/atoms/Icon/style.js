import styled, { css } from 'styled-components';

export const StyledIcon = styled.button`
${(props) => {
    switch (props.$mode) {
      case "do":
        return css`
        
        color: green;
  border: none;
 border-radius: 4px;
 background: none
 

      `;


      default:
        return css`
       ;
        color: blue;
border: none;
border-radius: 4px;
background: none
      `;
    }
  }}
`;

