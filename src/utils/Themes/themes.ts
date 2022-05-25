export interface themeTypes {
    title: string
    themeStyles: {
        color: string
        background: string
    }
}

export const Themes: themeTypes[] = [
    {
        title: 'Dark',
        themeStyles: {
            background: "black",
            color: "white"
        },
    },
    {
        title: 'Light',
        themeStyles: {
            background: "white",
            color: "black"
        },
    }
]