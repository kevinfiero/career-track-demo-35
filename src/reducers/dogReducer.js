import { CREATE_DOG, DELETE_DOG } from '../actions/dogActions';

export const initialState = {
  dogs: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case CREATE_DOG: 
      return {
        ...state,
        dogs: [...state.dogs, action.payload]
      };
    case DELETE_DOG: 
      return {
        ...state,
        dogs: state.dogs.filter(dog => 
          dog.name !== action.payload.name || 
          dog.age !== action.payload.age || 
          dog.weight !== action.payload.weight
        )
      };
    default:
      return state;
  }
}
