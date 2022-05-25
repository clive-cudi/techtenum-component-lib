import React from 'react';
import { ThemeCtx } from '../../contexts';
// import { themeTypes } from '../../utils';

interface ThemeCtxProviderProps {
    children: React.ReactNode
    value: any
}


export const ThemeCtxProvider = ({children, value}: ThemeCtxProviderProps): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null => {
    const themeCtxprovider = ThemeCtx.Provider({value: value, children: children});

    return (
        themeCtxprovider
    )
}

// const themeSchema: themeTypes = {
//     title: '',
//     themeStyles: {
//         background: "",
//         color: ""
//     }
// }