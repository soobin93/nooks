import React from "react";
import useInput from "./hooks/useInput";
import useTabs from "./hooks/useTabs";

function App() {
  // useInput
  const validateName = (value) => value.length < 10;
  const nameInput = useInput('', validateName);

  // useTabs
  const tabs = [
    {
      title: 'Section 1',
      content: 'This is the content of the section 1'
    }, {
      title: 'Section 2',
      content: 'This is the content of the section 2'
    }, {
      title: 'Section 3',
      content: 'This is the content of the section 3'
    }
  ];

  const { currentTab, changeTab } = useTabs(tabs, 1);

  return (
    <div>
      <h1>Playing with Hooks!</h1>
      <h2>useInput</h2>
      <input {...nameInput} />

      <hr/>

      <h2>useTabs</h2>
      {
        tabs.map((tab, index) => (
          <button key={`button-${index}`} type="button" onClick={() => {changeTab(index)}}>
            {tab.title}
          </button>
        ))
      }
      <div>
        {currentTab.content}
      </div>
    </div>
  );
}

export default App;
