import React from "react";
import useInput from "./hooks/useInput";
import useTabs from "./hooks/useTabs";
import useTitle from "./hooks/useTitle";
import useClick from "./hooks/useClick";
import onConfirm from "./hooks/onConfirm";
import preventLeave from "./hooks/preventLeave";

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

  // useTitle
  const updateTitle = useTitle('Loading...');
  setTimeout(() => updateTitle('Nooks!'), 3000);

  // useClick
  const testTitle = useClick(() => {
    testTitle.current.innerText = 'Well done!';
  });

  // useConfirm
  const deleteApple = () => {
    console.log('Apple has been deleted.');
  };

  const cancelDelete = () => {
    console.log('Request cancelled: Apple has not been deleted.')
  };

  const confirmDelete = () => {
    onConfirm('Are you sure?', deleteApple, cancelDelete);
  };

  // usePreventLeave
  const [protectLeave, unprotectLeave] = preventLeave();

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

      <hr/>

      <h2 ref={testTitle}>useClick (click here!)</h2>

      <hr/>

      <button type="button" onClick={confirmDelete}>Delete Apple</button>

      <hr/>

      <button type="button" onClick={protectLeave}>Protect</button>
      <button type="button" onClick={unprotectLeave}>Unprotect</button>
    </div>
  );
}

export default App;
