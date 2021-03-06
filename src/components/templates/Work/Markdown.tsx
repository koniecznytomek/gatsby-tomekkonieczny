import React from 'react';
import { Node, Props } from 'types/index';
import Image from '../../features/Image/Image';
import { useObserver } from '../../../hooks/useObserver';

export const Row = ({ children, bg }: Node) => {
  const { addToRefs, isObserve } = useObserver();

  return (
    <div
      className={`Work__row ${bg ? 'Work__row--bg' : ''} ${isObserve ? 'Work__row--inView' : ''}`}
      ref={addToRefs}
    >
      {children}
    </div>
  );
};

export const Col = ({ children, bg }: Node) => {
  return <div className={`Work__col ${bg ? 'Work__col--bg' : ''}`}>{children}</div>;
};

export const Cell = ({ children, bg }: Node) => {
  return <div className={`Work__cell ${bg ? 'Work__cell--bg' : ''}`}>{children}</div>;
};

export const Desc = ({ children }: Node) => {
  return <div className="Work__desc">{children}</div>;
};

export const Img = ({ src, alt, width }: Props) => {
  return (
    <div className="Work__img">
      <Image src={src} alt={alt} style={{ maxWidth: width }}/>
    </div>
  );
};
