import React, { useState, useEffect } from 'react';
import ListeDesCartes from './ListeDesCartes';
import SearchForm from './SearchForm';
import axios from 'axios';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [profileFiltre, setProfileFiltre] = useState([]);

  useEffect(() => {
    console.log('USE EFFECT');
    axios.get('https://5mbp3.sse.codesandbox.io/api/profiles').then((res) => {
      setProfiles(res.data);
      setProfileFiltre(res.data);
    });
  }, []);

  const mettreAjourProfiles = ({ target: { value } }) => {
    // const {
    //   target: { value },
    // } = e;

    const listeFiltree = profiles.filter((profile) => {
      const nomMin = profile.noms.toLowerCase();
      const valueMin = value.toLowerCase();
      // return profile.noms.toLowerCase().includes(value.toLowerCase());
      return nomMin.includes(valueMin);
    });
    setProfileFiltre(listeFiltree);
  };
  return (
    <>
      <SearchForm mettreAjourProfiles={mettreAjourProfiles} />
      <ListeDesCartes profiles={profileFiltre} />
    </>
  );
}

export default App;
