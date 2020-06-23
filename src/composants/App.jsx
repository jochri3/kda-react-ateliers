import React, { useState, useEffect } from 'react';
import ListeDesCartes from './liste-des-cartes/';
import SearchForm from './search-form/';
import listeContact from '../api/listeContact';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [profileFiltre, setProfileFiltre] = useState([]);

  useEffect(() => {
    listeContact.get('/profiles').then((res) => {
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
