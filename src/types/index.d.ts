import { ReactChildren } from 'react';

interface Props {
  bg: string;
  src: string;
  alt: string;
  width: string;
}

export interface Node {
  children: ReactChildren;
}

export interface Helm {
  title?: string;
  description?: string;
  image?: string;
  article?: string;
}

export interface frontmatter {
  id: number;
  title: string;
  slug: string;
  order: string;
  image?: string;
  thumb: string;
  alt: string;
  desc: string;
  short: string;
}

export interface IHome {
  data: {
    allMdx: {
      edges: {
        node: {
          frontmatter: frontmatter;
        };
      }[];
    };
  };
}

export interface IProjects {
  project: {
    node: {
      frontmatter: frontmatter;
    }
  }
}

interface IWork {
  data: {
    mdx: {
      frontmatter: {
        id: string;
        title: string;
        desc: string;
      };
      body: any;
    };
  };
  next: {
    slug: string;
    title: string;
  };
  counter: string;
}
