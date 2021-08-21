import React from 'react';
import img from './images/illustration-woman-online-desktop.svg';
import box from './images/illustration-box-desktop.svg';

const Cart = () => {
  return (
    <section className='card'>
      <img className='img-cardbox' src={box} alt='box' />
      <div className='img-container'>
        <img src={img} alt='img' />
      </div>
      <div className='questions-container'>
        <h1>FAQ</h1>
        <div className='acordion-item'>
          <h2>
            <button className='acordion-question'>
              Jelly sweet roll jelly
            </button>
          </h2>
          <div className='acordion-answer'>
            beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie
            sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant
            tootsie roll lollipop.
          </div>
        </div>
        <div className='acordion-item'>
          <h2>
            <button className='acordion-question'>
              Jelly sweet roll jelly
            </button>
          </h2>
          <div className='acordion-answer'>
            beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie
            sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant
            tootsie roll lollipop.
          </div>
        </div>
        <div className='acordion-item'>
          <h2>
            <button className='acordion-question'>
              Jelly sweet roll jelly
            </button>
          </h2>
          <div className='acordion-answer'>
            Marzipan marshmallow croissant tootsie roll lollipop.
          </div>
        </div>
        <div className='acordion-item'>
          <h2>
            <button className='acordion-question'>
              Jelly sweet roll jelly
            </button>
          </h2>
          <div className='acordion-answer'>
            beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie
            sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant
            tootsie roll lollipop.
          </div>
        </div>
        <div className='acordion-item'>
          <h2>
            <button className='acordion-question'>
              Jelly sweet roll jelly
            </button>
          </h2>
          <div className='acordion-answer'>
            beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie
            croissant tootsie roll lollipop.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
