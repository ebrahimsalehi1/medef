import React from 'react';
import { makeStyles } from '@mui/material';
import PropTypes from 'prop-types';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      backgroundColor: theme.palette.background.default
    }
  }
}));


export default function EBSelect(props) {
  const classes = useStyles();

  const {label,items} = props;
  //   return <Checkbox {...props} color={props.color ? props.color : 'primary'} />;

  return (<FormControl fullWidth>
    <InputLabel id="demo-simple-select-label" style={{
      marginTop:-4,
      marginRight:14
    }}>{label}</InputLabel>
    <Select
        className={classes.root}
        variant="outlined"
        labelId={`select-${label}`}
        id={`select-${label}`}
        {...props}
      >
        { items && items.map(item=><MenuItem value={item.value}>{item.name}</MenuItem>)
        }
      </Select>
    </FormControl>
  );
}

EBSelect.propTypes = {

};
