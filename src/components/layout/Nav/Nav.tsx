import React, { useEffect, useRef, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './Nav.scss';
import { Link } from 'gatsby';

const Nav = () => {
  const [toggle, setToggle] = useState('default');
  const [isOpening, setOpening] = useState(false);
  const burger = useRef<HTMLHeadingElement>(null);

  const close = () => setTimeout(() => setToggle('close'), 0);
  useEffect(() => {
    const el = burger.current;

    const toggler = () => {
      if (!isOpening) {
        toggle === 'default' || toggle === 'close' ? setToggle('open') : setToggle('close');
      }

      setOpening(true);
      setTimeout(() => setOpening(false), 1000);
    };

    el && el.addEventListener('click', toggler);
    return () => {
      if (el !== null) el.removeEventListener('click', toggler);
    };
  });

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allMdx(sort: { fields: frontmatter___id }) {
        edges {
          node {
            frontmatter {
              id
              title
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <div className="burger" ref={burger}>
        <span>
          <svg x="0px" y="0px" viewBox="0 0 50 50">
            <path
              className="burger-circle"
              d="M45.9,23c0,0.5,0,0.7,0,1c0,0.2,0,0.5,0,1c-0.1,0.5-0.1,0.7-0.1,1c-0.1,0.2-0.1,0.5-0.2,1
		c-0.1,0.5-0.2,0.7-0.2,0.9c0,0.1-0.1,0.2-0.1,0.4c0,0.1,0,0.2-0.1,0.2c0,0.1-0.1,0.2-0.1,0.3c-0.1,0.2-0.1,0.4-0.2,0.5
		c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1-0.1,0.2-0.1,0.4c-0.1,0.1-0.1,0.3-0.2,0.5c-0.1,0.2-0.2,0.4-0.2,0.5
		c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2c-0.1,0.1-0.1,0.2-0.2,0.4c0,0.1-0.1,0.1-0.1,0.2c0,0.1-0.1,0.2-0.2,0.3
		c-0.1,0.2-0.2,0.4-0.3,0.5C43.1,32.9,43,33,43,33.1c-0.2,0.2-0.3,0.4-0.6,0.8c-0.3,0.4-0.4,0.6-0.6,0.8c-0.1,0.1-0.1,0.2-0.2,0.3
		c-0.1,0.1-0.2,0.3-0.4,0.4c-0.1,0.1-0.1,0.2-0.2,0.2c-0.1,0.1-0.1,0.1-0.2,0.2c-0.1,0.1-0.2,0.2-0.3,0.3c-0.2,0.2-0.3,0.3-0.7,0.7
		c-0.7,0.7-0.7,0.7-1.5,1.3c-0.4,0.3-0.6,0.4-0.8,0.5c-0.2,0.1-0.4,0.2-0.8,0.5c-0.8,0.5-0.8,0.5-1.7,0.9c-0.4,0.2-0.7,0.3-0.9,0.4
		c-0.1,0.1-0.2,0.1-0.4,0.2c-0.1,0-0.1,0.1-0.2,0.1c-0.1,0-0.2,0.1-0.3,0.1C33,41,32.8,41,32.7,41.1c-0.1,0-0.3,0.1-0.4,0.1
		c-0.1,0-0.2,0.1-0.4,0.1c-0.1,0-0.3,0.1-0.6,0.1c-0.2,0.1-0.4,0.1-0.6,0.1c-0.1,0-0.3,0.1-0.4,0.1c-0.2,0-0.5,0.1-1,0.2
		c-0.2,0-0.4,0.1-0.6,0.1c-0.2,0-0.3,0-0.4,0c-0.1,0-0.2,0-0.4,0c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0-0.3,0c-0.2,0-0.4,0-0.6,0
		c-0.2,0-0.3,0-0.4,0c-0.1,0-0.2,0-0.4,0c-0.2,0-0.3,0-0.6,0c-0.2,0-0.4,0-0.6-0.1c-0.2,0-0.3,0-0.4,0c-0.1,0-0.2,0-0.4,0
		c-0.2,0-0.3-0.1-0.6-0.1c-0.5-0.1-0.7-0.2-0.9-0.2c-0.1,0-0.2-0.1-0.4-0.1c-0.1,0-0.3-0.1-0.6-0.2c-0.1,0-0.2-0.1-0.3-0.1
		c-0.1,0-0.2-0.1-0.2-0.1c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.2-0.1-0.4-0.1c-0.1-0.1-0.3-0.1-0.5-0.2c-0.1,0-0.2-0.1-0.3-0.1
		c-0.1,0-0.2-0.1-0.2-0.1c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1-0.1-0.2-0.1c-0.1-0.1-0.3-0.2-0.5-0.3
		c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1,0-0.2-0.1-0.2-0.1c-0.1-0.1-0.2-0.1-0.4-0.2c-0.2-0.1-0.4-0.2-0.8-0.5c-0.4-0.3-0.6-0.4-0.8-0.6
		c-0.2-0.2-0.4-0.3-0.8-0.6c-0.2-0.2-0.3-0.3-0.4-0.4c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.1-0.1c-0.1-0.1-0.2-0.2-0.3-0.3
		c-0.1-0.1-0.2-0.2-0.4-0.4c-0.2-0.2-0.3-0.3-0.4-0.4c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.2-0.2-0.2-0.3c0-0.1-0.1-0.1-0.2-0.2
		c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.2-0.3-0.3-0.4-0.5c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.3-0.3-0.5
		c-0.3-0.4-0.4-0.6-0.5-0.8c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.3-0.3-0.5c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1-0.1-0.2-0.1-0.2
		c-0.1-0.1-0.1-0.2-0.2-0.4c-0.1-0.2-0.2-0.4-0.4-0.9c-0.3-0.9-0.3-0.9-0.6-1.9c0-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2-0.1-0.2
		c0-0.1-0.1-0.3-0.1-0.4c-0.1-0.2-0.1-0.5-0.2-1c-0.1-0.5-0.1-0.7-0.2-1c0-0.2-0.1-0.5-0.1-1c0-0.5,0-0.7,0-1c0-0.2,0-0.5,0.1-1
		c0-0.5,0.1-0.7,0.1-1c0-0.2,0.1-0.5,0.1-1c0.1-0.5,0.1-0.7,0.2-1c0.1-0.2,0.1-0.5,0.2-0.9c0.1-0.2,0.1-0.4,0.2-0.6
		C9,17.5,9,17.4,9,17.3c0-0.1,0.1-0.2,0.1-0.4c0-0.1,0.1-0.2,0.1-0.2c0,0,0-0.1,0-0.1c0-0.1,0-0.1,0.1-0.2c0.1-0.2,0.2-0.4,0.2-0.5
		c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0.1-0.2,0.2-0.4c0.1-0.1,0.1-0.3,0.2-0.5c0.1-0.2,0.2-0.4,0.3-0.5
		c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.1,0.1-0.2c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.2,0.2-0.4,0.3-0.5
		c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.3,0.3-0.5c0.3-0.4,0.5-0.6,0.6-0.8c0.1-0.1,0.2-0.2,0.3-0.3
		c0.1-0.1,0.2-0.2,0.4-0.4c0.1-0.1,0.2-0.2,0.2-0.2c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.3-0.3c0,0,0.1-0.1,0.1-0.1
		c0.1,0,0.1-0.1,0.2-0.1c0.1-0.1,0.3-0.2,0.4-0.4c0.1-0.1,0.2-0.1,0.2-0.2c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.3-0.3
		c0.2-0.2,0.4-0.3,0.8-0.6c0.4-0.3,0.6-0.4,0.8-0.5c0.1-0.1,0.2-0.1,0.4-0.2c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.2-0.1,0.3-0.2
		c0.2-0.1,0.4-0.2,0.5-0.3c0.1,0,0.1-0.1,0.2-0.1c0.1,0,0.1-0.1,0.2-0.1c0.1-0.1,0.2-0.1,0.4-0.2c0.1-0.1,0.3-0.1,0.5-0.2
		c0.5-0.2,0.7-0.3,0.9-0.3c0.1,0,0.2-0.1,0.4-0.1c0.1,0,0.2,0,0.2-0.1c0.1,0,0.2-0.1,0.3-0.1c0.2-0.1,0.4-0.1,0.6-0.2
		c0.1,0,0.3-0.1,0.4-0.1c0.2-0.1,0.5-0.1,0.9-0.2c0.2,0,0.4-0.1,0.6-0.1c0.1,0,0.3-0.1,0.4-0.1c0.2,0,0.5-0.1,1-0.1
		c0.2,0,0.4,0,0.6,0c0.2,0,0.3,0,0.4,0c0.1,0,0.2,0,0.4,0c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.3,0c0.2,0,0.4,0,0.6,0
		c0.2,0,0.3,0,0.4,0c0.1,0,0.2,0,0.4,0c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0c0.1,0,0.2,0,0.3,0
		c0.2,0,0.3,0,0.4,0.1c0.1,0,0.2,0,0.4,0.1c0.2,0,0.3,0.1,0.6,0.1c0.5,0.1,0.7,0.2,0.9,0.3c0.1,0,0.2,0.1,0.4,0.1
		c0.1,0,0.3,0.1,0.5,0.2c0.1,0,0.2,0.1,0.3,0.1c0.1,0,0.2,0.1,0.2,0.1c0.1,0.1,0.3,0.1,0.4,0.2c0.2,0.1,0.4,0.2,0.9,0.4
		c0.9,0.4,0.9,0.4,1.8,0.9c0.4,0.3,0.6,0.4,0.8,0.6c0.2,0.2,0.4,0.3,0.8,0.6c0.4,0.3,0.6,0.4,0.8,0.6c0.1,0.1,0.2,0.2,0.3,0.3
		c0.1,0,0.1,0.1,0.2,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1c0.4,0.3,0.5,0.5,0.7,0.7c0.1,0.1,0.2,0.2,0.3,0.3
		c0.1,0.1,0.1,0.1,0.2,0.2c0.1,0.1,0.1,0.2,0.2,0.2c0.2,0.2,0.3,0.3,0.4,0.4c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.2,0.3,0.4,0.6,0.8
		c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.2,0.3,0.3,0.5c0.1,0.1,0.1,0.2,0.2,0.3
		c0,0.1,0.1,0.2,0.1,0.2c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.1,0.3,0.2,0.5c0.1,0.2,0.2,0.4,0.2,0.5
		c0.1,0.1,0.1,0.3,0.1,0.4c0,0.1,0,0.1,0.1,0.2c0,0.1,0,0.1,0.1,0.2c0,0.1,0.1,0.3,0.2,0.5c0,0.1,0.1,0.2,0.1,0.3
		c0,0.1,0,0.2,0.1,0.2c0,0.1,0.1,0.3,0.1,0.4c0,0.1,0.1,0.2,0.1,0.4c0,0.1,0.1,0.3,0.1,0.6c0.1,0.5,0.1,0.7,0.2,1
		c0,0.2,0.1,0.5,0.1,1c0,0.5,0,0.7,0.1,1C45.9,22.3,45.9,22.5,45.9,23"
            />

            <path
              className={`burger-line ${toggle === 'open' ? 'burger-active' : 'burger-unactive'}`}
              d="M2.8,48c0.4-0.3,0.3-0.4,0.6-0.8c0.4-0.4,0.4-0.3,0.7-0.7c0.3-0.4,0.4-0.3,0.7-0.7c0.4-0.4,0.3-0.4,0.7-0.7
		c0.4-0.4,0.3-0.4,0.7-0.7c0.4-0.4,0.4-0.3,0.8-0.6c0.4-0.3,0.3-0.4,0.7-0.7c0.3-0.4,0.3-0.4,0.7-0.7c0.3-0.4,0.3-0.4,0.6-0.8
		c0.4-0.3,0.5-0.2,0.8-0.6c0.4-0.3,0.3-0.4,0.7-0.7c0.3-0.4,0.3-0.4,0.6-0.8c0.4-0.4,0.4-0.3,0.8-0.6c0.4-0.4,0.3-0.4,0.7-0.7
		c0.3-0.4,0.4-0.3,0.7-0.7c0.4-0.4,0.3-0.4,0.7-0.7c0.4-0.3,0.4-0.4,0.7-0.7c0.4-0.4,0.4-0.3,0.7-0.7c0.3-0.4,0.3-0.4,0.7-0.8
		c0.4-0.4,0.4-0.3,0.8-0.6c0.4-0.3,0.3-0.4,0.6-0.8c0.4-0.4,0.4-0.3,0.7-0.7c0.3-0.4,0.4-0.4,0.7-0.7c0.3-0.4,0.4-0.3,0.8-0.7
		c0.4-0.3,0.4-0.3,0.7-0.7c0.4-0.4,0.3-0.4,0.7-0.7c0.3-0.4,0.4-0.4,0.7-0.7c0.4-0.3,0.4-0.3,0.7-0.7c0.4-0.4,0.3-0.4,0.7-0.8
		c0.3-0.4,0.3-0.4,0.6-0.8c0.4-0.3,0.4-0.3,0.8-0.6c0.4-0.4,0.4-0.4,0.7-0.7c0.4-0.3,0.4-0.4,0.7-0.7c0.4-0.3,0.4-0.3,0.7-0.7
		c0.3-0.4,0.3-0.4,0.7-0.7c0.4-0.4,0.4-0.4,0.7-0.7c0.4-0.3,0.3-0.4,0.7-0.7c0.3-0.4,0.3-0.4,0.7-0.7c0.4-0.4,0.4-0.3,0.8-0.6
		c0.4-0.4,0.3-0.4,0.6-0.8c0.4-0.4,0.4-0.3,0.8-0.7c0.4-0.3,0.3-0.4,0.7-0.7c0.4-0.4,0.4-0.3,0.8-0.6c0.4-0.4,0.4-0.4,0.7-0.7
		c0.3-0.4,0.3-0.4,0.6-0.8c0.4-0.4,0.4-0.3,0.8-0.6c0.4-0.4,0.3-0.4,0.7-0.7c0.4-0.4,0.3-0.4,0.7-0.8c0.4-0.3,0.4-0.3,0.7-0.7
		c0.4-0.4,0.4-0.3,0.8-0.7c0.3-0.4,0.3-0.4,0.6-0.8c0.4-0.4,0.5-0.3,0.8-0.6c0.4-0.4,0.3-0.4,0.7-0.7c0.3-0.4,0.3-0.4,0.7-0.8
		c0.4-0.3,0.4-0.3,0.8-0.6c0.4-0.3,0.4-0.3,0.7-0.7C42.8,8.1,42.7,8,43,7.6c0.4-0.4,0.4-0.3,0.7-0.7c0.4-0.4,0.4-0.3,0.7-0.7
		c0.4-0.4,0.3-0.4,0.7-0.8c0.4-0.4,0.4-0.3,0.7-0.7"
            />
          </svg>
        </span>
      </div>
      <div
        className={`menu ${
          toggle === 'open'
            ? 'menu--open'
            : toggle === 'default'
            ? 'menu--default'
            : toggle === 'close'
            ? 'menu--close'
            : ''
        }`}
      >
        <div className={`nav ${toggle === 'open' ? 'nav--open' : 'nav--close'}`}>
          <div className="line">
            <svg className="line-svg">
              <line x1="0" y1="0%" x2="0%" y2="100%" />
            </svg>
          </div>
          <div className="nav__works">
            <nav>
              <ul>
                <li>
                  <Link to={'/'} onClick={close}>
                    <span>00.</span>
                    Home
                  </Link>
                </li>
                {data.allMdx.edges.map((data: any, i: number) => (
                  <li key={i}>
                    <Link to={`/work/${data.node.frontmatter.slug}`} onClick={close}>
                      <span>0{data.node.frontmatter.id}.</span>
                      {data.node.frontmatter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="nav__info">
            <p>
              Hello, my name is Tomek Konieczny. I am a creative developer and graphic designer
              based in Cracow / Poland. My main passion is the fully understood JAMstack but i am
              not limited to that. In my work I try to combine the simplicity of the graphic design
              with the clean structure of the code and software architecture.
            </p>
            <p>
              I am also a big fan of old programming languages and retro computers. Years ago, I
              programed in Amos as a Basic dialect on Amiga Commodore computers. To this day, in my
              free time, I write the code as hobbyist on these platforms.
            </p>
            <p>
              Currently I spend some time exploring the secrets of machine learning and
              experimenting with my Raspberry Pi microcomputer as backend server. If You want to
              hire me or just talk send me message.
            </p>
            <p>
              <a href="mailto:tomek@tomekkonieczny.com">tomek@tomekkonieczny.com</a>
            </p>
          </div>
          <div className="nav__stack__title">
            <h2>My tech stack</h2>
          </div>
          <div className="nav__stack__tech">
            <p>
              <span>Frontend</span> Javascript, Typescript, React, Gatsby, Next, Gulp, Wordpressify,
              SCSS, Styled Components <span>Backend</span> Node, Express, Docker, MongoDB, PHP /
              MySQL <span>Design</span> Adobe Illustrator, Adobe Photoshop, Adobe XD, Sketchbook Pro
            </p>
          </div>
          <div className="nav__gatsby">
            <p>
              Made in GatsbyJS <br />
              <a
                href="https://github.com/koniecznytomek/gatsby-tomekkonieczny"
                target="_blank"
                rel="noreferrer"
              >
                Source code
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
