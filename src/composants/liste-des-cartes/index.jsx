import React from 'react';
import Card from '../card/';

export default function ListeDesCartes(props) {
  const listeDeCartes = props.profiles.map((profile) => (
    <Card
      photo={profile.photo}
      noms={profile.noms}
      anneeInscription={profile.anneeInscription}
      bio={profile.bio}
      nombreAmis={profile.nombreAmis}
    />
  ));
  return <div className='ui link cards'>{listeDeCartes}</div>;
}
