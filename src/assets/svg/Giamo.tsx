import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/const';
export const Container = styled.div`
  svg {
    stroke: #000000;
    .st0 {
      fill: none;
      stroke: #000000;
      stroke-width: 0.5;
      stroke-miterlimit: 10;
      stroke-dasharray: 1.9912, 1.9912;
    }
    .st1 {
      fill: none;
      stroke: #000000;
      stroke-width: 0.25;
      stroke-miterlimit: 10;
      stroke-dasharray: 2.0101, 2.0101;
    }
    .st2 {
      fill: none;
      stroke: #000000;
      stroke-width: 0.25;
      stroke-miterlimit: 10;
      stroke-dasharray: 2;
    }
    .st3 {
      fill: none;
      stroke: #000000;
      stroke-width: 0.25;
      stroke-miterlimit: 10;
      stroke-dasharray: 1.9912, 1.9912;
    }
    .st4 {
      fill: none;
    }
  }
`;

const Giamo = () => {
  return (
    <Container>
      <svg x="0px" y="0px" viewBox="0 0 230 450">
        <path
          d="M172,120L172,120c0,6.4-2.2,12.2-5.9,16.8c-12.9-14-31.3-22.8-51.9-22.8c-38.9,0-70.4,31.5-70.4,70.4
	c0,38.9,31.5,70.4,70.4,70.4s70.4-31.5,70.4-70.4c0-2-0.1-4-0.3-5.9c18.8-12.6,31.2-34.1,31.2-58.4v0H172z M114.2,211.3
	c-14.8,0-26.9-12-26.9-26.9s12-26.9,26.9-26.9s26.9,12,26.9,26.9S129,211.3,114.2,211.3z"
        />
        <path d="M87.3,352.7c0-14.8,12-26.9,26.9-26.9s26.9,12,26.9,26.9h43.5c0-38.9-31.5-70.4-70.4-70.4s-70.4,31.5-70.4,70.4H87.3z" />
        <g>
          <circle className="st0" cx="145.1" cy="120" r="70.4" />
        </g>
        <g>
          <circle className="st1" cx="145.1" cy="120" r="26.9" />
        </g>
        <g>
          <circle className="st0" cx="114.2" cy="254.8" r="70.4" />
        </g>
        <line className="st2" x1="2.4" y1="426.2" x2="188.5" y2="23.1" />
        <line className="st2" x1="224.2" y1="425" x2="40.7" y2="23" />
        <g>
          <ellipse
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -215.9293 184.0265)"
            className="st3"
            cx="114.2"
            cy="352.7"
            rx="70.4"
            ry="70.4"
          />
        </g>
        <line className="st4" x1="-1.6" y1="184.4" x2="231.6" y2="184.4" />
      </svg>
    </Container>
  );
};

export default Giamo;
