import React from 'react'
import { Field } from 'formik'
import { InputLabel } from '@material-ui/core'
import { Select as MaterialSelect } from 'formik-material-ui'

import FormControl from './formControl'

const Select = ({ ...props }) => (
  <FormControl>
    <InputLabel
      style={{
        color: 'black',
        padding: 0,
        fontSize: 12,
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: 1
      }}
      htmlFor={props.name}
    >
      {props.label}
    </InputLabel>
    <Field fullWidth component={MaterialSelect} {...props} />
  </FormControl>
)

export default Select
