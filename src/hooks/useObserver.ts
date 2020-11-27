import React, { useState, useRef, useEffect } from 'react';

const useObserver = () => {
  const refs = useRef([]);
  refs.current = [];

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    if(refs.current[1].dataset.effect === "slide") {
      console.log('ni ma')
      refs.current[1].style.opacity = "1";
    }

    const observer = new IntersectionObserver(item => {
    });
    observer.observe(refs.current[0]);

    return () => observer.disconnect();
  });

  return { addToRefs };
};

export { useObserver };
