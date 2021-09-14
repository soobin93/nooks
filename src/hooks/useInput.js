import {useState} from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    let canUpdate = true;
    if (typeof validator === 'function') {
      canUpdate = validator(event.target.value);
    }

    if (canUpdate) {
      setValue(event.target.value);
    }
  };

  return { value, onChange };
};

export default useInput;
