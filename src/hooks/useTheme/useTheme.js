import React, {useContext} from 'react';
import { ThemeCtx } from '../../contexts';
import { Themes } from '../../utils';

// hook returns the value of the context themeCtx
export const useTheme = () =>{
    // const [theme, setTheme] = useContext(ThemeCtx);
    const theme = useContext(ThemeCtx);

    // if (theme.title == '' || !theme.title) {
    //     setTheme({mode: 'Light'})
    // }

    return theme;
}

// const theme = useTheme();

// <div style={{color: theme.default_color}}>