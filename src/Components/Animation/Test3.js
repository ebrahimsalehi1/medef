import React from 'react';
import {useSpring,animated} from 'react-spring';

export default function Test3(props){

    const spr=useSpring({        
        //transform:`translate(0px,200px)`,
        from:{x:0},
        to:{x:200},
        config:{mass: 5, tension: 200, friction: 10}
    })
    return (
        <div class="container">
             <animated.div style={{...spr,        
                    width:100,
                    height:100,
                    backgroundColor:'#fff',
                    border:'1px solid black'}}>
                 Hello Ebrahim
             </animated.div>
        </div>
    );
}
