import React from 'react';

import './navigator.css';
import Item from './item';

const Navigator = () => {
  const clubs = [
    {
      "id": 1,
      "name": "Home"
    },
    {
      "id": 2,
      "name": "Poetry"
    },
    {
      "id": 3,
      "name": "Fiction"
    },
    {
      "id": 4,
      "name": "NonFiction"
    },
    {
      "id": 5,
      "name": "Speculative Fiction"
    },
    {
      "id": 6,
      "name": "YA"
    },
    {
      "id": 7,
      "name": "Graphic Novels"
    },
    {
      "id": 8,
      "name": "Illistrations"
    }
  ];

  return (
    <nav id='navigator'>
      <ul>{clubs.map(item => (
        <li key={ item.id }>
          <Item name={ item.name }/>
        </li>
      ))}</ul>
    </nav>
  )
}

export default Navigator;