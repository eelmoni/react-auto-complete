import { useCallback, useEffect, useState, type ChangeEvent } from 'react';
import debounce from 'lodash.debounce';

import { QueryResult, API_BASE_URL, PATH_SEARCH } from '../api';
import { isValidString, uniqueCollection } from '../utils';

const useSearch = () => {
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);
  const [result, setResult] = useState<QueryResult | undefined>(undefined);

  const makeQuery = useCallback((query: string) => {
    const url = `${API_BASE_URL}${PATH_SEARCH}?name=${query.trim()}`;

    fetch(url, {
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // Note: API returns duplicated objects.
        setResult(uniqueCollection({
          property: 'name',
          collection: json,
        }));
      })
      .catch((error) => {
        // TODO: send error to a monitoring tool (e.g.: Sentry)
        console.log(error);
      });
  }, []);

  const debouncedMakeQuery = useCallback(debounce(makeQuery, 300), []);

  const handleOnChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setInputValue(value);

    if (isValidString(value)) {
      debouncedMakeQuery(value);
    }
  }, [debouncedMakeQuery]);

  const resetResult = useCallback(() => {
    setResult(undefined);
  }, []);

  useEffect(() => {
    return () => {
      debouncedMakeQuery.cancel();
    }
  }, [debouncedMakeQuery]);

  return {
    handleOnChange,
    result,
    resetResult,
    inputValue,
  };
};

export default useSearch;
