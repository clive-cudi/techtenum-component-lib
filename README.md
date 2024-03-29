# Techtenum component Library


## Installation.

`npm i techtenum-component-lib`

Installs the library and necessary dependencies to the project

**To use the components, import them from the library**:

```js
import { Button } from 'techtenum-component-lib';

export const MyComponent = ({message}) => {
    return (
        <div>
            <Button label={message} styling={{color: "crimson",height: "auto"}} />
            // the styling prop is optional
        </div>
    )
}
```

## Commands

`npm install`

This installs the library dependencies as per the package.json file

`npm run storybook`

Runs the storybook server and opens the storybook on localhost:6006

`npm run compile`

Does a clean install, removes the current ./dist output folder, compiles the library using babel then spits the results in a ./dist folder in the root directory at the topmost level.

```json
{
    "clean": "rimraf dist",
    "compile": "npm run clean && tsc || echo 'tsc' && cross-env NODE_ENV=production babel src/ --out-dir dist --copy-files --ignore __tests__,spec.js,test.js,stories.js,__snapshots__"
}
```

`npm publish`

Publishes to npm. Ready for installation and use ;)

## Folder Structure

The ./src folder contains all the source code to the library.
React Components for the library are found in ./src/components
- Each Component is assigned a folder named the component's title e.g for the button component, a folder named Button in ./src/components/Button
- In each component folder there is a:
    * [ComponentName].js file --> the react component itself
    * [ComponentName].stories.js file --> Setup for rendering the component in Storybook
    * /stylesheet/[componentName].sass || .css --> styling

`Make sure to export components in the ./src/components/index.js file then export [again] from the main entry point ./src/index.js `
- All React Contexts should go to the ./contexts folder:
    * Create a folder for each context e.g ./[ContextName]Ctx
    * Contexts should be named in the following format ending with Ctx, [ContextName]Ctx.js
- All Hooks be kept in the ./src/hooks folder:
    * Create a folder for each hook e.g ./use[HookName]
    * Hook files should be named in the following format starting with use, use[HookName].js
- All Context Providers go to the ./src/providers folder:
    * Create a folder for each folder e.g ./[ContextName]Provider
    * Providers should be named in the following format ending with Provider, [ProviderName]Provider.js

`Remember to export the contexts, hooks, providers from the respective root folder index.js, then export from the main root folder [main entry point] index.js`

## WorkFlow

## --** Adding Components **--

For a button component,

Create the component:

```js
import React from 'react';
import PropTypes from 'prop-types';
import './stylesheets/button.css';

export const Button = ({label, styling}) => {
    return (
        <button style={styling}>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
}
```

Then create the story for the component in order to configure it for rendering in Storybook;

```js
import React from "react";
import { Button } from "./Button";

//  Defines Metadata for the component including the component itself, its title (where it will show up in the navigation UI story hierarchy), decorators, and parameters.
export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        label: {
            type: 'string',
            required: false
        }
    }
}

// component render
// you can pass in the props directly e.g
const Template = (args) => <Button label="hello" styling={{height: "100px", width: "400px"}} />

// Or you can pass down the props for the component through the Template function arguments this is recommended if there is need for various states of a component based on different arguments for example:  
// this is a Template for the Button Component
const Template = (args) => <Button {...args} />

// Based on the template, the button can appear as default for example:

export const Default = Template.bind({});

// Or it can appear as primary for example:

export const Primary = Template.bind({});

// this defines the arguments/ parameters for rendering the component or the different states of the component e.g:

// for the default button:
Default.args = {
    label: "Hello",
    styling: {
        height: "100px",
        width: "400px"
    }
}

// for the Primary Button:
Primary.args = {
    label: "I'm Primary!!",
    styling: {
        height: "50px",
        background: "black",
        width: "100px"
    }
}
```

Add some styling to the components in the stylesheets folders of the respective components.


Then export the button from the components root index.js file in ./src/components/index.js:

```js
export { Button } from './Button/Button';
```
Then in the main entry point ./src/index.js under the //components comment export the button from the components entry point:

```js
// Components

export { Button } from './components';
```


## Conclusion

Good Luck *** work in progress ***
