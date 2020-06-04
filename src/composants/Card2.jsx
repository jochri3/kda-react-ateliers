import React from 'react';

// function Card2({ photo, noms, anneeInscription, bio, nombreAmis }) {

// }
function Card2(props) {
  const { photo, noms, anneeInscription, bio, nombreAmis } = props;
  return (
    <div className='ui card'>
      <div className='image'>
        <img src={photo} />
      </div>
      <div className='content'>
        <a className='header'>{noms}</a>
        <div className='meta'>
          <span className='date'>Joined in {anneeInscription}</span>
        </div>
        <div className='description'>{bio}</div>
      </div>
      <div className='extra content'>
        <a>
          <i className='user icon'></i>
          {nombreAmis} Amis
        </a>
      </div>
    </div>
  );
}

export default Card2;
