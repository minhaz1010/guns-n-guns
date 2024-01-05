import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';
const Guns = (props) => {
  // console.log(props.handleAddToCart);
  const [guns,setGuns] = useState([]);
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then(res => res.json())
    .then(data => setGuns(data))
  },[])

  return (
    <>
    <div className='grid grid-cols-3 mt-4 gap-4 container mx-auto'>
      {guns.map((item) => <SingleGun key={item.id} guns = {item} 
      handleAddToCart = {props.handleAddToCart}
      ></SingleGun>)}
    </div>
    </>
   
  );
};

export default Guns;