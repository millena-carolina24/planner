import { StyledIcon } from "./style";



const IconStyle = (props) => {
  const { children, mode, onClick } = props;

  return (
    <>
      <StyledIcon $mode={mode} onClick={onClick}>
        {children}
      </StyledIcon>

      {/* <StyledButton backgroundColor={backgroundColor} onClick={onClick}>
        {children}
      </StyledButton> */}


    </>
  );
};

export default IconStyle;
