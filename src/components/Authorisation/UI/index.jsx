import { TextField, Typography } from '@mui/material'
import { withStyles } from '@mui/styles';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      border: "none",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'none',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none',
      },
    },
  },
})(TextField);

export const InputTextfield = ({ name, ...otherProps }) => {
  const {
    control,
    formState: { errors }
  } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field }) => (
        <CssTextField
          {...field}
          {...otherProps}
          error={errors[name]?.message}
          helperText={errors[name] ? errors[name]?.message : null}
        />
      )}
    />

  )
}

{/* <Typography variant="h6"
  component="h6"
 
/> */}
