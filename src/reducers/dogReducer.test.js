import { createDog, deleteDog } from '../actions/dogActions';
import reducer from './dogReducer';

describe('dog reducer', () =>{
  it('add a dog with CREATE_DOG action', () => {
    const state = {
      dogs: []
    };

    const action = createDog({ name: 'spot', age: 5, weight: '20 lbs' });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      dogs: [{ name: 'spot', age: 5, weight: '20 lbs' }]
    });
  });

  it('handles the DELETE_DOG action', () => {
    const state = {
      dogs: [{ name: 'spot', age: 5, weight: '20 lbs' }]
    };

    const action = deleteDog('spot', 5, '20 lbs');

    expect(reducer(state, action)).toEqual({
      dogs: []
    });
  });
});
