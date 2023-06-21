import styled, { css } from 'styled-components';

export const StyledText = styled.div`
  ${(props) => {
    switch (props.$mode) {
      case "titulo":
        return css`
          font-size: 32px;
          font-weight: bold;
          color: black;
        `;
      case "subtitulo":
        return css`
          font-size: 24px;
        `;

case "riscado":
        return css`
          font-size: 16px;
          text-decoration: line-through;
          color:red;
          display: inline-block

        `;

      default:
        return css`
          font-size: 16px;
          font-weight: normal;
          color: black;
          display: inline-block
        `;
    }
  }}
`;
