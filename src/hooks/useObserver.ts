import { useState, useRef, useEffect } from 'react';

const useObserver = () => {
  const [isObserve, setObserve] = useState(false);
  const refs = useRef<HTMLDivElement[]>([]);
  refs.current = [];

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(item => {
      if (item[0].isIntersecting) setObserve(true);
    });
    observer.observe(refs.current[0]);

    return () => observer.disconnect();
  }, [isObserve]);

  return { addToRefs, isObserve };
};
export { useObserver };
