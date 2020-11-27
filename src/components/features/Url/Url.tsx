import React, { ReactNode, useCallback } from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';

interface Url {
  children: ReactNode;
  node?: ReactNode;
  to?: string;
  effect?: string;
  lenght?: number;
}

export const Url = ({ children, to='/', effect = 'fadeUp', lenght = 0.6 }: Url) => {
  const exitTransition = {
    length: lenght,
    zIndex: 1,
    trigger: ({ node }: Url) => {
      exitTransition.exitTrigger(node);
      if (node) (node as HTMLElement).style.top = -window.pageYOffset + 'px';
      window.scrollTo({ top: -window.pageYOffset });
    },
    exitTrigger: useCallback(container => {
      container.setAttribute(
        'style',
        'animation: ' +
        effect +
        'Out ' +
        lenght +
        's cubic-bezier(0.83, 0, 0.17, 1) forwards;'
      );
    }, []),
  };

  const entryTransition = {
    zIndex: 2,
    trigger: ({ node }: Url) => {
      entryTransition.entryTrigger(node);
    },
    entryTrigger: useCallback(container => {
      container.setAttribute(
        'style',
        'animation: ' +
        effect +
        'In ' +
        lenght +
        's cubic-bezier(0.83, 0, 0.17, 1) forwards;'
      );
    }, []),
  };

  return (
    <>
      <TransitionLink to={to} exit={exitTransition} entry={entryTransition}>
        {children}
      </TransitionLink>
    </>
  );
};

export default Url;
