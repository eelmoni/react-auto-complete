import React, { useCallback } from 'react';

import './App.css';
import locales from './locales/en.json';
import Autocomplete from './components/Autocomplete';
import { University } from './api';

function App() {
  const onItemSelected = useCallback((item: University) => {
    alert(`You selected ${item.name}`);
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <h1>{locales.title}</h1>
      </header>
      <main className="app-main">
        <Autocomplete
          id={'university-search'}
          name={'university-search-bar'}
          placeholder={'Search a university...'}
          onItemPress={onItemSelected}
        />
      </main>
    </div>
  );
}

export default App;
