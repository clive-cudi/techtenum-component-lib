import {useContext} from 'react';
import { ThemeCtx } from '../../contexts';
import { themeTypes } from '../../utils';

// hook returns the value of the context themeCtx
export const useTheme = (): themeTypes | null =>{
    // const [theme, setTheme] = useContext(ThemeCtx);
    const theme = useContext(ThemeCtx);

    // if (theme.title == '' || !theme.title) {
    //     setTheme({mode: 'Light'})
    // }

    if (theme){
        return theme;
    }

    return {
        title: "light",
        themeStyles: {
            background: "white",
            color: "black"
        }
    }
}

// const theme = useTheme();

// <div style={{color: theme.default_color}}>