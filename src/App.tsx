import React from 'react';
import './App.css';
import { CounterStoreProvider } from './store/CounterContext';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

function App() {
  return (
    <CounterStoreProvider>
      <main>
          <Comp1 />
          <Comp2 />
      </main>
    </CounterStoreProvider>
  );
}

export default App;
