import styled, { css } from 'styled-components';


// export const Botão2 = styled.button`

// background-color: ${props => props.backgroundColor ? props.backgroundColor : 'pink'};
//   color: #fff;
//   font-size: 16px;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;

//   &:hover {
//     background-color: #1976d2;
//   }

//   &:focus {
//     outline: none;
//   }

// `;

export const StyledButton = styled.button`
${(props) => {
  switch (props.$mode) {
    case "dark":
      return css`
        background-color: black;
        color: white;
      `;
    default:
      return css`
        background-color: white;
        color: black;
      `;
  }
}}
`;

