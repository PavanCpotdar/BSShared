import {IconButton, InputAdornment, TextField, Tooltip  } from '@material-ui/core';
import React from 'react';
import { my_style } from './style';

const CustomInput = (props) => {
    const classes = my_style();

    const {
        name, label,type,id,onEnterPress, value, onChange, size, fullWidth, width, bgColor, textTransform, disabled, placeholder, multiline, onIconClick, required, error,standard,Icon,toolTipLabel
    } = props;
    return (
        <TextField
            variant={standard ? 'standard' : 'outlined'}
            error={error}
            required={required}
            label={label}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={size === 'md' ? classes.md : classes.lg}
            type={type}
            id={id}
            fullWidth={fullWidth}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    if (onEnterPress) {
                        onEnterPress();
                        e.preventDefault();
                    }
                }
            }}
            style={{ width: width, backgroundColor: bgColor }}
            InputProps={{
                endAdornment: Icon && (
                    <InputAdornment position="end">
                        <Tooltip title={toolTipLabel} l>
                            <IconButton onClick={onIconClick}>
                                {' '}
                                <Icon />
                            </IconButton>
                        </Tooltip>
                    </InputAdornment>
                )
            }}
        />

    )
}

export default CustomInput