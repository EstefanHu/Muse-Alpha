import React, { useState, useEffect } from 'react';

import Hero from '../hero/hero';
import Hosts from '../wrappers/hosts';
import Content from '../wrappers/content';

const Home = () => {
  const [hubs, setHubs] = useState();

  useEffect(() => {
    fetch('http://localhost:4000/home/')
      .then(res => res.json())
      .then(res => {
        setHubs(res.hubs)
      });
  }, []);

  return hubs ? (
    <main>
      <Hero />
      <Hosts hubs={ hubs } />
      <Content isBase={ true } />
    </main>
  ) : (
    <main>
      <p>Loading...</p>
    </main>
  )
}

export default Home;