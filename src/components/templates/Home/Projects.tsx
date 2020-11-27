import React from 'react';
import './Home.scss';
import Url from '../../features/Url/Url';
import Image from '../../features/Image/Image';
import { IProjects } from 'types';

const Projects = ({ project }: IProjects) => {
  const { id, title, slug, thumb, alt, short } = project.node.frontmatter;

  return (
    <>
      <div className="project">
        <div className="title">
          <div className="no">
            <span>{id}</span>
            <span>/ 4</span>
          </div>
          <h2>
            <Url to={`/work/${slug}`}>{title}</Url>
          </h2>
          <p>{short}</p>
        </div>
        <div className="image">
          <Url to={`/work/${slug}`}>
            <Image src={thumb} alt={alt} />
          </Url>
        </div>
      </div>
    </>
  );
};

export default Projects;
