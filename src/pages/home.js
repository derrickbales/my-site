import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  font-family: 'Work Sans', sans-serif;
  margin-top: 100px;
  margin-bottom: 200px;
  margin-right: 800px;

  ul {
    list-style-type: none;
    padding-inline-start: 15px;
  }

  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: blue;
    }
  }
`;

export const Home = () => (
  <StyledWrapper>
    <h4>hi, i'm derrick.</h4>
    <p>
      {' '}
      I am a west coast based creator, currently splitting my time between LA
      and Las Vegas.{' '}
    </p>
    <p> you can also check me out here.</p>
    <ul>
      <li>
        {' '}
        <a href="www.instagram.com/derrickkbales">INSTAGRAM</a>
      </li>
      <li>
        {' '}
        <a href="www.instagram.com/derrickbales">YOUTUBE</a>
      </li>
      <li>
        {' '}
        <a href="www.instagram.com">STORE</a>
      </li>
    </ul>
    <ul>
      <li> contact</li>
    </ul>
  </StyledWrapper>
);
