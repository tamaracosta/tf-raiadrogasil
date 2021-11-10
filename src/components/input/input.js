import * as React from 'react';
import '../../styles/register.css';
import { Box, TextField } from '@mui/material';

export default function FormPropsTextFields({
    label,
    type,
    name,
    value,
    onChange,
    className,
    helperText,
    error,
    disabled
}) {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    margin: '0.75rem',
                    width: '20rem',
                    '& > :not(style)': { m: 1 },
                }}>
                <TextField
                    required
                    id={name}
                    label={label}
                    name={name}
                    className={className ? className : 'input-standard'}
                    type={type}
                    value={value}
                    onChange={onChange}
                    error={error}
                    helperText={helperText}
                    disabled={disabled}
                />
            </Box>
        </div>
    );
}
