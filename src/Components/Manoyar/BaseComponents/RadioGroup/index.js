import React from 'react';
import { makeStyles } from '@mui/material';
import PropTypes from 'prop-types';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function EBRadioGroup(props) {
  const {
    items,
    name,
    value,
    onChange,
    defaultValue,
    label,
    className
  } = props;
  return (
    <FormControl component="fieldset" className={className}>
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        row
        aria-label="position"
        name={name}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {items &&
          items.map((item, index) => {
            return (
              <FormControlLabel
                value={item.value}
                control={<Radio color="primary" />}
                label={item.label}
                labelPlacement={
                  item.labelPlacement ? item.labelPlacement : 'start'
                }
                disabled={item.disabled ? item.disabled : false}
                key={index}
              />
            );
          })}
      </RadioGroup>
    </FormControl>
  );
}

EBRadioGroup.propTypes = {  

};
