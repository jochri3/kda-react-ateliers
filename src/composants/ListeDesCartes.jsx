import React from 'react';
import Card from './Card';

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
  return (
    <div class='ui link cards'>
      {listeDeCartes}
      {/* <Card
        photo={props.profiles[0].photo}
        noms={props.profiles[0].noms}
        anneeInscription={props.profiles[0].anneeInscription}
        bio={props.profiles[0].bio}
        nombreAmis={props.profiles[0].nombreAmis}
      />
      <Card
        photo={props.profiles[1].photo}
        noms={props.profiles[1].noms}
        anneeInscription={props.profiles[1].anneeInscription}
        bio={props.profiles[1].bio}
        nombreAmis={props.profiles[1].nombreAmis}
      />
      <Card
        photo={props.profiles[2].photo}
        noms={props.profiles[2].noms}
        anneeInscription={props.profiles[2].anneeInscription}
        bio={props.profiles[2].bio}
        nombreAmis={props.profiles[2].nombreAmis}
      /> */}
    </div>
  );
}
