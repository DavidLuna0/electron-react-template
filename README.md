This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the react app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn electron`

Runs the electron app in the development mode.<br />
It runs the `yarn start` script and after that load the app running on localhost:3000 on the electron app.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `yarn preelectron-build`

It runs the `yarn build` script to build the react project for production.<br/>

### `yarn electron-build`

Automatically it runs the `yarn preelectron-build` script to build the react project.<br/>

After that it packages the project and create a installer to install the aplicattion
You can configure the platform for which you want to build your project by adding -m(mac), -l(linux), -w(windows) or -mwl(mac, windows and linux).<br/>