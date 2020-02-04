import React, { useState, useEffect } from 'react';

import Title from './title';

const Hub = props => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(props.title);
  }, [
    props.title,
  ]);

  return(
    <article style={ article}>
      <Title title={ title } />
    </article>
  )
}

const article = {
  height: '500px',
  width: '100%',
  boxShadow: '12px 12px 12px 0 rgba(0, 0, 0, 0.05)',
  padding: '20px 30px',
  backgroundColor: 'white',
  marginBottom: '20px',
  borderRadius: '5px'
}

export default Hub;