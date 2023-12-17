import { useState } from 'react';

const useInput = <T>(): [string, any] => {
  const [value, setValue] = useState('');

  const handler = (e: React.ChangeEvent<HTMLInputElement>, space: string) => {
    if (!space) {
      console.log(space);
      setValue(e.target.value);
    } else {
      setValue(space);
    }
  };

  return [value, handler];
};

export default useInput;
