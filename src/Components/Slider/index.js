import React from 'react';
import Slider from '@material-ui/core/Slider';
import {withStyles} from '@material-ui/core/styles';
import LensIcon from '@material-ui/icons/Lens';

const styles = theme => ({
    slider: {
        padding: '0px 36px',
    },
    thumbIconWrapper1: {
        backgroundColor: '#0c68e9',
    },
});

const valueSlider1=5;
const handleChangeSlider1 = ()=>{console.log('handleChangeSlider1');}

function SliderComp(props){

    const {classes} = props;


    return (
        <Slider
        aria-labelledby="slider-icon"
        classes={{
            container: classes.slider,
            thumbIconWrapper: classes.thumbIconWrapper1,
        }}
        thumb={<LensIcon style={{color: '#0c68e9'}}/>}
        value={valueSlider1}
        onChange={handleChangeSlider1}
        vertical
        min={0}
        max={100}
        disabled={false}
    />
    );
}

export default withStyles(styles)(SliderComp);