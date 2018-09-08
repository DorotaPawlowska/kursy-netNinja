import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return(
    <div className="container">
      <h4 className="center">
        About
      </h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum molestias porro aperiam voluptas quibusdam fugit repellendus itaque rerum voluptate eligendi dolor, non optio at odit a? Beatae, veritatis illum.</p>
    </div>
  )
}

export default Rainbow(About);