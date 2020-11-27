import { ReactChildren } from 'react';

interface Props {
  bg: string;
  src: string;
  alt: string;
  width: string;
}

export interface Node {
  children: ReactChildren;
  bg?: string;
}

export interface Helm {
  title?: string;
  description?: string;
  image?: string;
  article?: string;
}

interface frontmatter {
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
    };
  };
}

interface IWork {
  data: {
    mdx: {
      frontmatter: frontmatter;
      body: any;
    };
  };
  next: {
    slug: string;
    title: string;
  };
  counter: number;
}

interface Data {
  data: {
    mdx: {
      id: string;
      frontmatter: frontmatter;
      body: any;
    };
    allMdx: {
      edges: {
        next: {
          id: string;
          frontmatter: frontmatter;
        };
        node: {
          id: string;
          frontmatter: frontmatter;
        };
      }[];
    };
  };
}
