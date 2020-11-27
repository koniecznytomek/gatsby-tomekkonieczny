import React from 'react';
import SEO from '../utils/helmetWrapper';
import Home from '../components/templates/Home/Home';
import { graphql } from 'gatsby';
import { IHome } from 'types';

export const HomePage = ({ data }: IHome) => (
  <>
    <SEO title="Home" />
    <Home data={data} />
  </>
);

export default HomePage;

export const pageQuery = graphql`
  query works {
    allMdx(sort: { fields: frontmatter___id }) {
      edges {
        node {
          id
          frontmatter {
            id
            title
            slug
            thumb
            alt
            short
          }
        }
      }
      totalCount
    }
  }
`;
