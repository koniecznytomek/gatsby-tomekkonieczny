import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  svg {
    width: 75px;
    position: relative;
    .st0 {
      fill: #010101;
    }
    .st1 {
      fill: none;
      stroke: #000000;
      stroke-width: 0.25;
      stroke-miterlimit: 10;
    }
    .st4 {
      opacity:0;
    }
  }

`;

const Behance = () => {
  return (
    <Container>
      <svg x="0px" y="0px" viewBox="0 0 100 100">
        <path
          className="st0"
          d="M84,33H62v-6h22V33z M88.1,64c-1.3,3.8-6,8.9-15.1,8.9c-9.1,0-16.5-5.1-16.5-16.8c0-11.6,6.9-17.5,16.2-17.5
	c9.1,0,14.7,5.3,15.9,13.1c0.2,1.5,0.3,3.5,0.3,6.3H65.2c0.4,9.5,10.3,9.8,13.6,6C78.7,64,88.1,64,88.1,64z M65,52h15.3
	c-0.3-4.8-3.5-6.9-7.6-6.9C68.2,45.1,65.7,47.5,65,52z M34.9,73H15V27h21.4c16.8,0.2,17.1,16.7,8.4,21.2C55.4,52.1,55.7,73,34.9,73z
	 M25,45h10.8c7.5,0,8.7-9-0.9-9H25C25,36,25,45,25,45z M35.1,55H25v9h10C44.1,64,43.5,55,35.1,55z"
        />
        <line className="st1" x1="15" y1="85" x2="15" y2="11">
          <animate
            attributeName="y1"
            from="85"
            to="0"
            dur="0.5s"
            begin="behance.mouseover"
            fill="freeze"
          />
          <animate
            attributeName="y1"
            from="0"
            to="85"
            dur="0.3s"
            begin="behance.mouseout"
            fill="freeze"
          />
        </line>
        <line className="st1" x1="0" y1="73" x2="120" y2="73">
          <animate
            attributeName="x2"
            from="120"
            to="0"
            dur="0.5s"
            begin="behance.mouseover"
            fill="freeze"
          />
          <animate
            attributeName="x2"
            from="0"
            to="120"
            dur="0.3s"
            begin="behance.mouseout"
            fill="freeze"
          />
        </line>
        <rect id="behance" className="st4" width="100" height="100" />
      </svg>
    </Container>
  );
};

export default Behance;
