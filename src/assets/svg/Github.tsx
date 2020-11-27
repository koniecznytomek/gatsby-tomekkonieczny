import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  svg {
    width: 75px;
    position: relative;
    .st0 {
      fill: none;
      stroke: #000000;
      stroke-width: 0.25;
      stroke-miterlimit: 10;
    }
    .st1 {
      fill: #010101;
    }
    .st4 {
      opacity: 0;
    }
  }
`;

const Github = () => {
  return (
    <Container>
      <svg x="0px" y="0px" viewBox="0 0 100 100">
        <line className="st0" x1="25" y1="59" x2="25" y2="18">
          <animate
            attributeName="y2"
            from="18"
            to="90"
            dur="0.5s"
            begin="github.mouseover"
            fill="freeze"
          />
          <animate
            attributeName="y2"
            from="90"
            to="18"
            dur="0.3s"
            begin="github.mouseout"
            fill="freeze"
          />
        </line>
        <line className="st0" x1="84" y1="75" x2="52" y2="75">
          <animate
            attributeName="x2"
            from="52"
            to="10"
            dur="0.5s"
            begin="github.mouseover"
            fill="freeze"
          />
          <animate
            attributeName="x2"
            from="10"
            to="52"
            dur="0.3s"
            begin="github.mouseout"
            fill="freeze"
          />
        </line>
        <line className="st0" x1="77" y1="80" x2="77" y2="58" />
        <line className="st0" x1="21" y1="25" x2="68" y2="25" />
        <path
          className="st1"
          d="M51.3,25.3c-14.4,0-26.1,11.5-26.1,25.6c0,11.3,7.5,20.9,17.8,24.3c1.3,0.2,1.8-0.6,1.8-1.2c0-0.6,0-2.2,0-4.4
	c-7.3,1.5-8.8-3.4-8.8-3.4c-1.2-3-2.9-3.7-2.9-3.7c-2.4-1.6,0.2-1.6,0.2-1.6c2.6,0.2,4,2.6,4,2.6c2.3,3.9,6.1,2.8,7.6,2.1
	c0.2-1.7,0.9-2.8,1.7-3.4c-5.8-0.6-11.9-2.8-11.9-12.7c0-2.8,1-5.1,2.7-6.9c-0.3-0.6-1.2-3.3,0.2-6.8c0,0,2.2-0.7,7.2,2.6
	c2.1-0.6,4.3-0.9,6.5-0.9c2.2,0,4.4,0.3,6.5,0.9c5-3.3,7.1-2.6,7.1-2.6c1.4,3.5,0.5,6.1,0.3,6.8c1.7,1.8,2.7,4.1,2.7,6.9
	c0,9.8-6.1,12-11.9,12.6c0.9,0.8,1.8,2.3,1.8,4.7c0,3.4,0,6.2,0,7c0,0.7,0.5,1.5,1.8,1.2c10.4-3.4,17.9-13,17.9-24.3
	C77.4,36.7,65.7,25.3,51.3,25.3z"
        />
        <rect id="github" className="st4" width="100" height="100" />
      </svg>
    </Container>
  );
};

export default Github;
