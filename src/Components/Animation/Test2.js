import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
 
 
const Test2 = (props) => {

 
    const { x } = useSpring({
        from: { x: 0 },
        to: { x: 1 },
        config: {mass: 100, tension: 500, friction: 10}
      },
      );
   
    return ( 
        <animated.div
          style={{
            transform: x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [180, 220, 180, 220, 180, 220, 180, 200]
              })
              .interpolate(x => `translate3d(${x}px, 0px, 0px)`)
          }}
        >
          Shake
          {props.children}
        </animated.div>
    );

};
 
export default Test2;