import { StyledButton, Botão2 } from "./style";



const ButtonStyle = (props) => {
  const { onClick, children, mode, backgroundColor } = props;

  return (
    <>
      <StyledButton $mode={mode} onClick={onClick}>
        {children}
      </StyledButton>

      {/* <StyledButton backgroundColor={backgroundColor} onClick={onClick}>
        {children}
      </StyledButton> */}


    </>
  );
};

export default ButtonStyle;
