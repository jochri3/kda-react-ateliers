import React from 'react';
import ListeDesCartes from './ListeDesCartes';

//JSX
const profiles = [
  {
    photo:
      'https://qph.fs.quoracdn.net/main-thumb-221356592-200-zyhrpkhlegkmkbjildezexzodkngkjec.jpeg',
    noms: 'Christian Lisangola',
    anneeInscription: 2019,
    bio: 'Je suis amoureux des zombies',
    nombreAmis: 566,
  },
  {
    photo:
      'https://pbs.twimg.com/profile_images/1097778598294028288/JfH7BFgX_400x400.jpg',
    noms: 'Laurene Bitota',
    anneeInscription: 1999,
    bio: 'Je suis développeuse',
    nombreAmis: 899,
  },
  {
    photo:
      'https://pbs.twimg.com/profile_images/1040675969634324481/C3Rw5Pqq.jpg',
    noms: 'Dieudonné Miyalu',
    anneeInscription: 2015,
    bio: 'Lead developpeur',
    nombreAmis: 700,
  },
];

function App() {
  return <ListeDesCartes profiles={profiles} />;
}

export default App;
