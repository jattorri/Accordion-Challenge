import React from 'react';
import img from './images/illustration-woman-online-desktop.svg';
import box from './images/illustration-box-desktop.svg';

const Cart = () => {
  return (
    <section>
      <div className='cart-container'>
        <div className='img-container'>
          <img src={img} alt='img' />
        </div>
      </div>
      <img src={box} alt='box' className='box' />
    </section>
  );
};

export default Cart;
