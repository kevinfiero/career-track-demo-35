import React from 'react';
import Dog from './Dog';
import { useSelector } from '../../state/DogProvider';
import { getDogs } from '../../selectors/dogSelectors';

const DogList = () => {
  const dogs = useSelector(getDogs);
  const dogElements = dogs.map(dog => (
    <li key={dog.name}>
      <Dog {...dog} />
    </li>
  ));
  
  return (
    <ul>
      {dogElements}
    </ul>
  );
};

export default DogList;
