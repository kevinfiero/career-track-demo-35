import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import DogList from './components/dogs/DogList';
import { DogProvider } from './state/DogProvider';

render(
  <DogProvider>
    <App />
    <DogList />
  </DogProvider>,
  document.getElementById('root')
);
