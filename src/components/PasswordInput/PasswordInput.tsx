import React, { useState } from "react";
import { InputDiv, InputDivProps } from "../InputDiv/InputDiv";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { RoundedInput } from '../RoundedInput/RoundedInput';

interface PasswordInputProps {
  onChange: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  inputArgs?: {};
  inputDivProps?: InputDivProps;
  endIconReplacement?: {
      showPassword: JSX.Element | React.ReactNode;
      hidePassword: JSX.Element | React.ReactNode;
  }
  showPasswordTrigger?: (showPassword?: boolean)=> {}
  isRounded?: boolean
}

export const PasswordInput = ({
  onChange,
  inputArgs,
  inputDivProps,
  endIconReplacement,
  showPasswordTrigger,
  isRounded
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(showPasswordTrigger ?? false);

  function toggleShowPassword() {
    if (showPassword == true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  }

  return (
    <>
        {
          isRounded == true ?
          (<RoundedInput
              type={showPassword ? `text` : `password`}
              onChange={(e): React.ChangeEvent<HTMLInputElement> => {
                onChange(e);
                return e;
              }}
              endIconReplacement={showPassword == true ? (endIconReplacement ? <span onClick={()=>{toggleShowPassword()}}>{endIconReplacement.hidePassword}</span> : <AiFillEyeInvisible onClick={()=>{toggleShowPassword()}} />) : (endIconReplacement ? <span onClick={()=>{toggleShowPassword()}}>{endIconReplacement.showPassword}</span> : <AiFillEye onClick={()=>{toggleShowPassword()}} />)}
              inputArgs={{ ...inputArgs }}
              icon={<RiLockPasswordLine />}
              validateInput={false}
              {...inputDivProps}
            />)
          :
            (<InputDiv
              type={showPassword ? `text` : `password`}
              onChange={(e): React.ChangeEvent<HTMLInputElement> => {
                onChange(e);
                return e;
              }}
              endIconReplacement={showPassword == true ? (endIconReplacement ? <span onClick={()=>{toggleShowPassword()}}>{endIconReplacement.hidePassword}</span> : <AiFillEyeInvisible onClick={()=>{toggleShowPassword()}} />) : (endIconReplacement ? <span onClick={()=>{toggleShowPassword()}}>{endIconReplacement.showPassword}</span> : <AiFillEye onClick={()=>{toggleShowPassword()}} />)}
              inputArgs={{ ...inputArgs }}
              icon={<RiLockPasswordLine />}
              validateInput={false}
              tooltipConfig={{onCorrect: "Correct format...", onError: "Incorrect format."}}
              {...inputDivProps}
            />)
        }
    </> 
  )
};
