import React from 'react';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
