import React from 'react';
import './Work.scss';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from '../../../utils/helmetWrapper';
import Url from '../../features/Url/Url';
import { IWork } from 'types';

const Work = ({ data, next, counter }: IWork) => {
  const { id, title, desc } = data.mdx.frontmatter;

  return (
    <>
      <SEO title={title} description={desc} />
      <div className="Work">
        <div className="Work__header">
          <h1>{title}</h1>
          <p>{desc}</p>
          <div className="no">
            <span>{id}</span>
            <span>/{counter}</span>
          </div>
        </div>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <div className="Work__footer">
          <span>Next work</span>
          <Url to={`/work/${next.slug}`}>{next.title}</Url>
        </div>
      </div>
    </>
  );
};
export default Work;
