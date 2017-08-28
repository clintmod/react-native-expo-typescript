# react-native-typescript-expo

A demo app showing how you can use:

* React Native
* Expo
* Jest
* TypeScript
* Visual Studio Code

## Motivation

I couldn't find an example to demonstrate how to get typescript and react native running with expo.

## TL;DR
* Clone the git repo `git clone https://github.com/clintmod/react-native-expo-typescript.git`
* Run `yarn && yarn start` to install the dependencies and start the react native packager.
* Scan the QR code to launch the app in the expo client app on your phone.

## Initial Setup
* Use a mac (the first two steps are different on windows the rest should work though)
* Install [Homebrew](https://brew.sh/) `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
* Install [Node.js](https://nodejs.org/en/) `brew install node`
* Install [Yarn](https://yarnpkg.com/) `npm install -g yarn`
* Install create-react-native-app `yarn global add create-react-native-app`
* Install [Visual Studio Code](https://code.visualstudio.com/download)
* Add code to your PATH. In vs code press `CMD + Shift + P` then in the open dialog type `Shell Command: Install 'code' command in PATH`


## Project Setup

* clone the git repo `git clone https://github.com/clintmod/react-native-expo-typescript.git`
* `cd` to the git repo and run `yarn && yarn start`
* Install the [expo client](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) app on your phone
* Launch the expo client and scan the QR code

![QR Code](https://cdn-images-1.medium.com/max/800/1*6_VA9xeIYMfyFHDeTJ9G-A.png)

This should have the app running on your phone.

![The app running on your phone.](https://cdn-images-1.medium.com/max/800/1*dqKvc5O9F1bVkV7iEYINZg.png)

## Visual Studio Code Setup

* Open up vs code
* Chose File -> Open or use `CMD + O`
* Select the folder with the cloned git repo from earlier.
* Once the project opens you can press `CMD + Shift + B` to run the `build-watch` task from the `package.json` file which will recompile all changes on each file save and automatically reload and display the changes on your phone.

![Visual Studio](https://cdn-images-1.medium.com/max/1000/1*97SXIa-WSvhjEKyVAnJ8Mg.png)

## Optional Setup
**Install vs code extensions**

* In VS Code type `CMD + Shift + P` then type `Install Extension` then press Enter . [Here’s a gist](https://gist.github.com/clintmod/487845d674017313529013732f2aadc0) of my current vs code config and extension list.

## Notes
1. It’s important to leave the App.js file at the root of the project. Expo expects it and using `"expo" {"entryPoint":"somethingElse.js"}` in the `app.config` file doesn’t work.
2. If you see an error like this when running the tests…
```
console.error node_modules/react-native/Libraries/Core/ ExceptionsManager.js:73 Warning: PropTypes has been moved to a separate package. Accessing React.PropTypes is no longer supported and will be removed completely in React 16. Use the prop-types package on npm instead. (https://fb.me/migrating-from-react-proptypes)
```
… it’s [because of this](https://github.com/react-community/create-react-native-app/issues/298#issuecomment-314569894) and you can ignore it until react 16.0.0 is released.

## Filing a bug

Please feel free to file any issues you find in the github issues section.
