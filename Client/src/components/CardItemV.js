import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
function CardItemV(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__img-wrap' data-category={props.label}>
            <iframe title={props.title}
             src={props.src} 
             allow="autoplay" width="400px" height="300px" align="top"></iframe>
             
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemV;
