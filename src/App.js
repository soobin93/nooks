import React, {useState} from "react";

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


function App() {

  // Use Input
  const validateName = (value) => value.length < 10;
  const nameInput = useInput('', validateName);

  return (
    <div>
      <h1>Playing with Hooks!</h1>
      <h2>Use Input</h2>
      <input {...nameInput} />
    </div>
  );
}

export default App;
