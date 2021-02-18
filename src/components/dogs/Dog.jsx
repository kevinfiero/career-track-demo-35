import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../state/DogProvider';
import { deleteDog } from '../../actions/dogActions';

const Dog = ({ name, age, weight }) => {
  const dispatch = useDispatch();

  const handleDeleteDog = () => {
    dispatch(deleteDog(name, age, weight));
  };

  return (
    <>
      <dl>
        <dt>Name</dt>
        <dd>{name}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
        <dt>Weight</dt>
        <dd>{weight}</dd>
      </dl>
      <button onClick={handleDeleteDog}>Delete</button>
    </>
  );
};

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string.isRequired


};

export default Dog;

