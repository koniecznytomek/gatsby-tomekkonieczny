import React from 'react';
import { graphql } from 'gatsby';
import Work from '../../components/templates/Work/Work';
import { Data } from 'types';

const Website = ({ data }: Data) => {
  const counter = data.allMdx.edges.length;
  const current = data.mdx.id;
  const next =
    data &&
    data.allMdx.edges
      .filter(item => item.node.id === current)
      .map(edge => {
        if (edge.next) {
          return edge.next.frontmatter;
        } else {
          return data.allMdx.edges[0].node.frontmatter;
        }
      });

  return (
    <>
      <Work data={data} next={next[0]} counter={counter} />
    </>
  );
};

export default Website;

export const query = graphql`
  query($id: String!) {
    allMdx {
      edges {
        next {
          id
          frontmatter {
            title
            slug
          }
        }
        node {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        id
        title
        slug
        alt
        desc
        image
        short
        thumb
      }
      body
      id
      slug
    }
  }
`;
