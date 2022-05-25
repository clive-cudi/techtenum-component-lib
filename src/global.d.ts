declare module '*.css' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export default classNames;
}


declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}