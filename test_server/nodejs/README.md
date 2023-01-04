## To run the automation locally

1. Download and install Android Studio from [here](https://developer.android.com/studio "here")
2. Open Android Studio and create an Android Emulator Called 'Pixel_4' and run it
3. You can find the app apk on the '/test_server/apps' directory
4. Make sure node and npm are installed locally
5. Install typescript globally by running `npm i -g typescript`
6. Install Appium globally by running `npm i -g appium`
7. Install Appium Flutter Driver globally by running `npm i -g appium-flutter-driver`
8. Run the appium server by running `appium --base-path /wd/hub` in a separate terminal
9. cd to the '/test_server/nodejs' directory
10. `npm install` to install node modules
11. Run the test by `APPIUM_OS=android npm start`

------------

#### To migrate from Appium 1.x to Appium 2.x (Optional)

1. `npm install -g appium@next` to upgrade
2. `appium driver install uiautomator2` to install the latest driver version
3. `appium driver install xcuitest@4.12.2` to install a specific driver version
4. `appium driver install --source=npm appium-flutter-driver` to install the new Flutter driver version