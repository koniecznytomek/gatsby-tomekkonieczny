import React from 'react';
import './Home.scss';
import Projects from './Projects';
import { IHome } from 'types';
import Github from '../../../assets/svg/Github';
import Dribbble from '../../../assets/svg/Dribbble';
import Behance from '../../../assets/svg/Behance';
import Twitter from '../../../assets/svg/Twitter';

const Home = ({ data }: IHome) => {
  return (
    <main>
      <div className="Home">
        <header className="header">
          <div className="header__title">
            <h1>
              I'm <br /> a Programmer <br />& graphic <br />
              designer.
            </h1>
          </div>
          <div className="header__desc">
            <p>
              TL;DR <br />
              I'm working in-studio and remotely on projects for digital, creative and marketing
              agencies. I create clean, holistically simple and useful design. I’m interested in
              researching, prototyping, designing, and building practical, purpose-driven digital
              services. I’m a JAMstack fan. It’s a way of building websites and apps for better
              performance — lower scaling costs, providing higher security, and offering a better
              developer experience.
            </p>
          </div>
        </header>
      </div>
      <div className="Projects">
        {data.allMdx.edges.map((project, i) => (
          <Projects key={i} project={project} />
        ))}
      </div>
      <div className="Contact">
        <footer className="footer">
          <div className="footer__socials">
            <ul>
              <li>
                <a href="http://twitter.com/tomekkoniec" target="_blank">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="http://behance.com/tomekkonieczny" target="_blank">
                  <Behance />
                </a>
              </li>
              <li>
                <a href="http://dribbble.com/tomekkonieczny" target="_blank">
                  <Dribbble />
                </a>
              </li>
              <li>
                <a href="http://github.com/koniecznytomek" target="_blank">
                  <Github />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__mail">
            <a href="mailto:tomek@tomekkonieczny.com">tomek@tomekkonieczny.com</a>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Home;
