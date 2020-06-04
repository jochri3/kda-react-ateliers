import React from 'react';
import Card from './Card';
import Card2 from './Card2';

//JSX
const profile = {
  photo:
    'https://qph.fs.quoracdn.net/main-thumb-221356592-200-zyhrpkhlegkmkbjildezexzodkngkjec.jpeg',
  noms: 'Christian Lisangola',
  anneeInscription: 2019,
  bio: 'Je suis amoureux des zombies',
  nombreAmis: 566,
};

const profile2 = {
  photo:
    'https://pbs.twimg.com/profile_images/1097778598294028288/JfH7BFgX_400x400.jpg',
  noms: 'Laurene Bitota',
  anneeInscription: 1999,
  bio: 'Je suis développeuse',
  nombreAmis: 899,
};

function App() {
  return (
    <>
      <Card
        photo={profile.photo}
        noms={profile.noms}
        anneeInscription={profile.anneeInscription}
        bio={profile.bio}
        nombreAmis={profile.nombreAmis}
      />

      <Card {...profile2} />
      <Card2 {...profile} />
    </>
  );
}

export default App;
