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
    .st4 {
      opacity: 0;
    }
  }
`;

const Twitter = () => {
  return (
    <Container>
      <svg x="0px" y="0px" viewBox="0 0 100 100">
        <line className="st0" x1="77" y1="84" x2="77" y2="16">
          <animate
            attributeName="y1"
            from="84"
            to="40"
            dur="0.5s"
            begin="twitter.mouseover"
            fill="freeze"
          />
          <animate
            attributeName="y1"
            from="40"
            to="84"
            dur="0.3s"
            begin="twitter.mouseout"
            fill="freeze"
          />
        </line>
        <line className="st0" x1="19" y1="21" x2="88" y2="21">
          <animate
            attributeName="x1"
            from="19"
            to="70"
            dur="0.3s"
            begin="twitter.mouseover"
            fill="freeze"
          />
          <animate
            attributeName="x1"
            from="70"
            to="19"
            dur="0.2s"
            begin="twitter.mouseout"
            fill="freeze"
          />
        </line>
        <g>
          <path
            d="M83.1,28.2c-2.4,1-4.8,1.7-7.5,2.1c2.7-1.7,4.8-4.1,5.8-7.2c-2.4,1.4-5.1,2.4-8.2,3.1c-2.4-2.4-5.8-4.1-9.6-4.1
		c-7.2,0-13,5.8-13,13c0,1,0,2.1,0.3,3.1c-10.6-0.7-20.2-5.8-26.7-13.7c-1,2.1-1.7,4.1-1.7,6.5c0,4.5,2.4,8.6,5.8,11
		c-2.1,0-4.1-0.7-5.8-1.7l0,0c0,6.2,4.5,11.7,10.3,12.7c-1,0.3-2.4,0.3-3.4,0.3c-0.7,0-1.7,0-2.4-0.3c1.7,5.1,6.5,8.9,12,8.9
		c-4.5,3.4-9.9,5.5-16.1,5.5c-1,0-2.1,0-3.1-0.3c5.8,4.5,12.7,6.5,20.2,6.5c24,0,37-19.9,37-37c0-0.7,0-1,0-1.7
		C79.3,33,81.4,30.6,83.1,28.2z"
          />
        </g>
        <line className="st0" x1="45" y1="73" x2="95" y2="73">

            <animate
              attributeName="x1"
              from="45"
              to="80"
              dur="0.5s"
              begin="twitter.mouseover"
              fill="freeze"
            />
            <animate
              attributeName="x1"
              from="80"
              to="45"
              dur="0.1s"
              begin="twitter.mouseout"
              fill="freeze"
            />
          </line>
        <rect id="twitter" className="st4" width="100" height="100" />
      </svg>
    </Container>
  );
};

export default Twitter;
