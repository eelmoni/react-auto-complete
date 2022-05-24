import { useCallback } from 'react';
import { University } from '../../api';
import useSearch from '../../hooks/use-search';

import Input from '../Input';
import ItemList from '../ItemList';
import './index.css';

type AutocompleteProps = {
  id: string;
  name: string;
  placeholder: string;
  onItemPress?: Function;
};

const Autocomplete = ({ id, name, placeholder, onItemPress }: AutocompleteProps) => {
  const {
    handleOnChange,
    result,
    resetResult,
    inputValue,
  } = useSearch();

  const handleItemPress = useCallback((item: University) => {
    resetResult();

    if (onItemPress) onItemPress(item);
  }, [resetResult, onItemPress]);

  return (
    <div className='autocomplete-container'>
      <Input id={id} name={name} placeholder={placeholder} onChange={handleOnChange} />
      <ItemList items={result} onItemPress={handleItemPress} searchTerm={inputValue} />
    </div>
  );
};

export default Autocomplete;
