import React from 'react';
import {useTransition,animated} from 'react-spring';
import './MyAnimate.css';

export default function MyAnimate(props){
    const [isVisible,setIsVisible] = React.useState(false);
    const transition = useTransition(isVisible,
        {
            from:{x:800,y:0,opacity:0},
            enter:{x:0,y:0,opacity:1},
            leave:{x:100,y:800,opacity:0},
        }
    );
    return (<div>
            MyAnimate

            <button onClick={()=>{setIsVisible(!isVisible)}}>Click</button>

            {/* {isVisible ?  <div className="item" />:''} */}
            
            {transition((style,item)=>item ? <animated.div style={style} className="item" /> : '')}


        </div>)
}
