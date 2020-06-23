import React from 'react';

function Card(props) {
  return (
    <div className='ui card'>
      <div className='image'>
        <img src={props.photo} />
      </div>
      <div className='content'>
        <a className='header'>{props.noms}</a>
        <div className='meta'>
          <span className='date'>Joined in {props.anneeInscription}</span>
        </div>
        <div className='description'>{props.bio}</div>
      </div>
      <div className='extra content'>
        <a>
          <i className='user icon'></i>
          {props.nombreAmis} Amis
        </a>
      </div>
    </div>
  );
}

export default Card;
