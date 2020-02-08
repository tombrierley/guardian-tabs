# Guardian Tabs Exercise

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for speed of development.

## Approach

- I used a bootstrapped WebPack config for speed of getting things set up and there was no real need for a custom configuration
- React was my front end framework of choice and implmeneted a modern Hooks approach
- I went for a Container/Component approach and tried to be State managment agnostic as possible, allowing something like Redux to be easily applied and to make the Tabs component more portable
- I Focussed more on making a robust and portable API utility rather than on visual polish
- Styled comoponents with a theming was used for styling
- Choose Fetch over Axios as this can be transpiled for older browsers using Babel
- I did't do any testing as I didn't think it was acheiveable within the time
- I didn't use TypeScript/Flow and instead went with prop-types to speed up development

I felt like I've done the majority of the work within the 2 hours, but didn't have time to do the final finese add the polish and extra cross browser and acessibility testing.

- Add functionality to be able to navigate the tabs using the keyboard arrows for accessibiliy
- I haven't tested and optimised this for performance, best practices or accessibility using a tool like Google Lighthouse
- I haven't done wide browser testing
- I wanted to style the error message and generally parse the error response and return that to the user
- Added transitions after fetching the content
- General tidying up and reusing of prop types

I've added TODOs within the comments to incicate things I wanted to do but ran out of time.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
