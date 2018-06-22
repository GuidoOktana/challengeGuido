This project was bootstrapped with Expo XDE [here](https://expo.io).


## Table of Contents

* [Dependencies](#dependencies)
* [Installation](#installation)
* [Run the app](#run-the-app)
* [Available Scripts](#available-scripts)
  * [exp register](#exp-register)
  * [exp login](#exp-login)
  * [exp logout](#exp-logout)
* [Demo](#demo)
* [Technologies used](#technologies-used)



## Dependencies

This dependencies are necessary before running the app.

* node 10.0.1 or greater
* npm 5.6.0
* Xcode
* Android Studio with an AVD (Android Virtual Device) configured
* Watchman package



## Installation

1. Clone [this](https://github.com/GuidoOktana/challengeGuido.git) repository to a local directory

  `git clone https://github.com/GuidoOktana/challengeGuido.git`

2. Navigate to the project

  `cd challengeGuido`

3. Install Dependencies with `npm` using the terminal.

  `npm install`

4. To run the app on your physical device, you'll have to install Expo.

  * ios [here](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8)
  * android [here](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)



## Run the app

Install expo Command-Line Interface with `npm install -g exp`

1 - In the terminal (inside the project folder) run:

    `exp start`

2 - Open a new terminal window and navigate to the project folder:

    * Run `exp ios` to open with an Ios simulator.
    * Run `exp android` to open with an Android simulator.

    (You need to have the simulators installed)


Instructions to open this project on a physical device:

   *Android devices: scan the provided QR code.
   *iOS devices: run `exp send -s <your-phone-number-or-email>` in this project directory in another terminal window to send the URL to your device.




## Available Scripts

#### `exp register`

   Sign up for a new Expo account

#### `exp login`

   Login to Expo

#### `exp logout`

   Logout from exp.host

More Scripts in [here](https://docs.expo.io/versions/latest/workflow/exp-cli)


## Demo

   Demo video inside `Demo` folder.



## Technologies used

  * Javascript (ES6) with React Native.
  * Redux.
