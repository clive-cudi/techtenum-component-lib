import React,{useState} from 'react';
import { ThemeCtx } from '../../contexts';
import { useTheme } from '../../hooks';
import { Themes } from '../../utils';

export const ThemeCtxProvider = ({children, value}) => {
    return (
        <ThemeCtx.Provider value={value}>
            {children}
        </ThemeCtx.Provider>
    )
}

const themeSchema = {
    title: '',
    themeStyles: {
        background: "",
        color: ""
    }
}