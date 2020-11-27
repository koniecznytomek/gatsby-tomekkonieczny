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
      opacity: 0;
    }
  }
`;

const Dribbble = () => {
  return (
    <Container>
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 100 100">
        <g>
          <g>
            <rect
              x="28.1"
              y="48.6"
              transform="matrix(0.7077 -0.7065 0.7065 0.7077 -20.5946 50.6765)"
              className="st0"
              width="45.7"
              height="3.3"
            />
          </g>
        </g>
        <g>
          <g>
            <rect
              x="49.3"
              y="27.4"
              transform="matrix(0.7065 -0.7077 0.7077 0.7065 -20.5941 50.7981)"
              className="st0"
              width="3.3"
              height="45.7"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              className="st0"
              d="M56.2,55.8c-4.6,4.6-6.8,10.9-6,17.4l3.3-0.4c-0.6-5.4,1.2-10.8,5.1-14.6c4-4,9.7-5.9,15.3-5l0.5-3.3
			C67.7,48.8,60.9,51,56.2,55.8z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              className="st0"
              d="M50.2,27.3l-3.3,0.2c0.4,5.1-1.5,10.1-5.2,13.8c-3.6,3.7-8.5,5.5-13.8,5.2l-0.2,3.3c0.5,0,0.9,0,1.4,0
			c5.7,0,11-2.2,14.9-6.2C48.4,39.4,50.6,33.4,50.2,27.3z"
            />
          </g>
        </g>
        <g>
          <g>
            <path
              className="st0"
              d="M51,25.3c-13.8,0-25,11.2-25,25s11.2,25,25,25s25-11.2,25-25S64.8,25.3,51,25.3z M51,71.9
			c-11.9,0-21.7-9.7-21.7-21.7S39.1,28.6,51,28.6s21.7,9.7,21.7,21.7S63,71.9,51,71.9z"
            />
          </g>
        </g>
        <line className="st1" x1="25" y1="87" x2="25" y2="34">
          <animate
            attributeName="y1"
            from="87"
            to="10"
            dur="0.5s"
            begin="dribbble.mouseover"
            fill="freeze"
          />
          <animate
            attributeName="y1"
            from="10"
            to="87"
            dur="0.3s"
            begin="dribbble.mouseout"
            fill="freeze"
          />
        </line>
        <line className="st1" x1="17" y1="75" x2="67" y2="75">
          <animate
            attributeName="x1"
            from="17"
            to="90"
            dur="0.5s"
            begin="dribbble.mouseover"
            fill="freeze"
          />
          <animate
            attributeName="x1"
            from="90"
            to="17"
            dur="0.3s"
            begin="dribbble.mouseout"
            fill="freeze"
          />
        </line>
        <line className="st1" x1="75" y1="71" x2="75" y2="18">
          <animate
            attributeName="y2"
            from="18"
            to="90"
            dur="0.5s"
            begin="dribbble.mouseover"
            fill="freeze"
          />
          <animate
            attributeName="y2"
            from="90"
            to="18"
            dur="0.3s"
            begin="dribbble.mouseout"
            fill="freeze"
          />
        </line>
        <line className="st1" x1="41" y1="25" x2="91" y2="25">
          <animate
            attributeName="x1"
            from="41"
            to="10"
            dur="0.5s"
            begin="dribbble.mouseover"
            fill="freeze"
          />
          <animate
            attributeName="x1"
            from="10"
            to="41"
            dur="0.3s"
            begin="dribbble.mouseout"
            fill="freeze"
          />
        </line>
        <rect id="dribbble" className="st4" width="100" height="100" />
      </svg>
    </Container>
  );
};

export default Dribbble;
