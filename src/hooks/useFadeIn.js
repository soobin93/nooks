import {useEffect, useRef} from "react";

const useFadeIn = (duration = 3, delay = 0) => {

  const ref = useRef();

  useEffect(() => {
    // Validating params
    if (typeof duration !== 'number' || typeof delay !== 'number')
      return;

    if (ref.current) {
      const { current } = ref;

      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
      current.style.opacity = 1;
    }
  }, [duration, delay]);

  return { ref: ref, style: {opacity: 0} };
};

export default useFadeIn;
