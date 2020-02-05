import React, { useState, useEffect } from 'react';

import Card from '../card/card';

const Dashboard = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch('http://localhost:4000/dashboard/')
      .then(res => res.json())
      .then(res => {
        setContent(res.content)
      });
  }, []);

  return content ? (
    <section>
      {content.map(item => (
        <Card 
          key={ item.id }
          genre={ item.genre }
          author={ item.author }
          credibility={ item.credibility }
          title={ item.title }
          description={ item.description }
          />
      ))}
    </section>
  ) : (
    <section>
      <p>Loading...</p>
    </section>
  )
}

export default Dashboard;