import React, {FC} from 'react'



interface IButtonProps {
    btnText: string;
    type:'primary' | 'secondary' | 'light';
    bgColor:string;
    isDisabled:boolean;

}



const Button:FC<IButtonProps> = ({btnText,type,bgColor,isDisabled }) => {
  return <div>Button</div>;
  
};

export default Button;
