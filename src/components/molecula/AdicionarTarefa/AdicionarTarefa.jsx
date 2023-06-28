import InputStyle from "../../Input/Input.Style"
import ButtonStyle from "../../atoms/Button/Button.Style"
import React from 'react';


const AdicionarTarefa = ({ inputProps, btnProps, value, children }) => {
    return (
        <>

        {inputProps && (

            <InputStyle type="text" placeholder={inputProps.placeholder} value={value} onChange={inputProps.onChange} className="text-center form-control-sm"></InputStyle>
        )}
        
        {btnProps && (

<ButtonStyle onClick={btnProps.onClick}> {children} </ButtonStyle>

        )}
        </>

    )}

    export default AdicionarTarefa;