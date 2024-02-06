import React, { useState } from 'react';
import classes from "./header.module.scss";
import classNames from "classnames";
import { FiShoppingCart } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import {NavLink, useNavigate}  from "react-router-dom"
import Button from '../../ui/ProductItem/Button/Button';


const Header = () => {

  const [data, setData] = useState(0);
  const  [productPrice, setProductPrice] = useState(125);


  const inc = () => {
    setData((prev) => prev + 1);
  }


  const dec = () => {
    setData((prev) => prev - 1);
  }




const navigate = useNavigate();



const  handleClick2  = () => {
  navigate("/assets/images/image-1.jpg")


}



const handleClick = () => {
  navigate("/cartyyyy");


}


  return (
    <div className='container'>
<header className={classes.header}>
    <h2 className={classes.header_logo}>Sneakers</h2>
  <ul className={classes.header_menu}>
   
    <li className={classes.header_menu_item}>
        <NavLink 
        to="/"
         className={classNames(classes["header_menu_item--link"])}>
         Collections
        </NavLink>
    </li>

    <li className={classes.header_menu_item}>
        <NavLink 
        to="/men"
          className={classNames(classes["header_menu_item--link"])}>
       Men
        </NavLink>


    </li>

    <li className={classes.header_menu_item}>
        <NavLink
         to="/women"
          className={classNames(classes["header_menu_item--link"])}>
        Women
        </NavLink>


    </li>

    <li className={classes.header_menu_item}>
        <NavLink 
        to="/about"
          className={classNames(classes["header_menu_item--link"])}>
      About
        </NavLink>


    </li>

    <li className={classes.header_menu_item}>
        <NavLink 
        to="/contact"
         className={classNames(classes["header_menu_item--link"])}>
      Contact
        </NavLink>
    </li>

<button onClick={handleClick}>Click</button>
<button onClick={handleClick2}>Add </button>

<button onClick={inc}>+</button>
<button onClick={dec}>-</button>

<p>${data*productPrice}.00 </p>


<Button 
btnText='Clickkk' 
type="primary" 
isDisabled={true}
bgColor='red'

 />
 

  </ul>

  <div className={classes.header_right}>
    <div className={classes.basket}>
      <span></span>
        <FiShoppingCart />
    </div>
    <div className={classes.avatar}>
   <RxAvatar />
    </div>



  </div>



</header>


    </div>
  );
};

export default Header;
