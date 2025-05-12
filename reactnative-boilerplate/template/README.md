# ReactNative - BoilerPlate

Mindbowsers Biolerplate for RN

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kickstart a mobile application with a cleaner architecture.

The boilerplate provides **an optimized architecture for building solid cross-platform mobile applications** through separation of concerns between the UI and business logic.

## Requirements

Node 10 or greater is required. Development for iOS requires a Mac and Xcode 9.4 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native.  
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `React Native CLI Quickstart` tab.  
Follow instructions for your given `development OS` and `target OS`.

## Boilerplate Highlights

Some of the key highlights of this boilerplate is as below:

#### Core

- [React Native](https://github.com/facebook/react-nativee) for views.
- [React Navigation](https://github.com/react-navigation/react-navigation) handles in-app navigation.
- [Javascript](https://reactnative.dev/docs/javascript-environment) for adding JavaScript Environment.
- [Redux](https://github.com/reactjs/redux) manages application state.
- [React Redux](https://github.com/reactjs/react-redux) to use React-Redux bindings.

#### Utilities

- [React Native Bootsplash](https://www.npmjs.com/package/react-native-bootsplash) to avoid white screen at start of app.
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) makes side effects (i.e. asynchronous things like data fetching) in React/Redux applications easier and better.
- [Axios](https://github.com/axios/axios) for API calls.
- [HTTP Service](https://bitbucket.org/Mindbowser/reactnative-boilerplate/src/master/src/networkConfig/HttpServices.js) Base service class for API calls.
- [Navigation Service](https://bitbucket.org/Mindbowser/reactnative-boilerplate/src/master/src/navigation/NavigationService.js) Navigation Service class to navigate without navigation props.
- [Button](https://bitbucket.org/Mindbowser/reactnative-boilerplate/src/master/src/reusableComponents/Button.js) Custom button component that extends Pressable and enhances it with various helpful props.

#### Developer Experience

- [Prettier](https://prettier.io/) for linting.
- [ESLint](https://eslint.org/) for code analysing
- [Flipper](https://fbflipper.com/) for debugging.

Refer below link incase of issues configuring ESLint and Prettier:
https://github.com/vasilestefirta/react-native-eslint-prettier-example

## Directory Structure

```bash
.
├── __tests__                       # Test cases container folder.
├── android                         # Android specific files container folder.
├── ios                             # iOS specific files container folder.
├── node_modules                    # Node Packages.
├── resources                       # Font files that are copied to native folder when building.
├── src                             # Source code.
|   ├── containers                  # App Container file.
|   ├── navigation                  # Navigation components and wrappers.
│   │   ├── AppNavigator.js         # Container file for all routes.
│   │   ├── NavigationService.js    # File with Navigation functions navigate, replace, go back etc..
|   ├── networkConfig               # API call related files and general services related files.
│   │   ├── Endpoints.js            # File for all API url's.
│   │   ├── HttpServices.js         # Helper methods for API request - POST, GET, PUT, DELETE etc..
│   ├── redux                       # Container folder specific redux.
│   │   ├── actions                 # Redux thunk action functions.
│   │   ├── reducers                # Reducer functions for redux.
│   │   ├── store.js                # Store for redux states.
│   │   ├── reducers.js             # Container file for combined reducers.
│   │   ├── ReduxTypes.js           # redux action types constant file.
│   │   ├── index.js                # store creation function and related file.
|   ├── res                         # Container folder for res files.
│   │ ├── images                    # Container folder for image files.
│   ├── reusablelComponents         # Container folder for reusable components through out the app.
│   │   ├── Button.js               # Contains reusable button component.
│   ├── screens                     # Container folder for all screen level components.
│   ├── theme                       # Container folder for Colors, Theme related files.
│   │   ├── Colors.js               # Contains all color constants at one place.
│   │   ├── Theme.js                # Config file for setting theme - light, dark etc..
│   ├── utils                       # Container folder for helper functions.
├── .gitignore                      # Tells git which files to ignore.
├── .prettierrc                     # Rules for prettier linter.
├── App.js                          # App main route.
├── index.js                        # Initial/Entry file to run the app.
├── package.json                    # Package configuration.
├── .env                            # env configuration base file
├── .env.production                 # Can run app with Production URL and Constants
├── .env.developement               # Can run app with Developement URL and Constants
├── .env.staging                    # Can run app with Staging URL and Constants
```

## Start

To create a new project using the boilerplate simply run :

```bash

$ npx react-native init MyApp --template https://bitbucket.org/Mindbowser/reactnative-boilerplate

```

Assuming you have all the requirements installed, you can run the project by running:

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn <platform>` to run the _platform_ application (remember to start a simulator or connect a device)

# Developer can run app with multiple environments (prod,dev,stage) by using following commands

(Below commands are also available under Scripts in package.json)

# Android

yarn android:staging - To run app on staging environment  
yarn android:staging-release - To run app on staging release environment  
yarn android:dev - To run app on developement environment  
yarn android:dev-release - To run app on developement release environment  
yarn android:prod - To run app on production environment  
yarn android:prod-release - To run app on production release environment

./gradlew assembleStagingRelease - To create staging environment build (.apk)  
./gradlew assembleProductionRelease - To create production environment build (.apk)  
./gradlew assembleDevelopmentRelease - To create development environment build (.apk)  

# iOS

yarn ios:production - To run app on production environment  
yarn ios:development - To run app on developement environment  
yarn ios:staging - To run app on staging environment
