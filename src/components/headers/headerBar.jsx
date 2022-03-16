import React from 'react';
import styled from 'styled-components'



const Section = styled.section`
  padding: 1em;
  background: ${props=> props.color};
  width: 100vw;
`

const HeaderBar = () =>  {

  return (
    <Section color='#B3CA9B'/>
  );
}

export default HeaderBar;
