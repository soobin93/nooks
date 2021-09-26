import {useEffect, useState} from "react";

const useTitle = (initialValue) => {

  const [title, setTitle] = useState(initialValue);

  const updateTitle = () => {
    const titleElement = document.querySelector('title');
    titleElement.innerText = title;
  };

  useEffect(updateTitle, [title]);

  return setTitle;
}

export default useTitle;
