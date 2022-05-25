import {createContext} from 'react';
import { Themes, themeTypes } from '../../utils';

export const ThemeCtx = createContext<themeTypes | null>(Themes[1]);