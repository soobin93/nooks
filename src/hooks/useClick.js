import {useEffect, useRef} from "react";

const useClick = (onClick) => {

  const reference = useRef();

  useEffect(() => {

    const element = reference.current;

    if (element) {
      element.addEventListener('click', onClick);
    }

    return () => {
      if (element) {
        element.removeEventListener('click', onClick);
      }
    };
  }, [onClick]);

  return reference;
};

export default useClick;
