## To run the automation locally

1. Download and install Android Studio from [here](https://developer.android.com/studio "here")
2. Make sure you have added the ANDROID_HOME and JAVA_HOME paths to your environment variables
3. Open Android Studio and create an Android Emulator Called 'Pixel_4' and run it
4. You can find the app apk on the '/test_server/apps' directory
5. Make sure node and npm are installed locally
6. Install typescript globally by running `npm i -g typescript`
7. Install Appium globally by running `npm i -g appium`
8. Install Appium Flutter Driver globally by running `npm i -g appium-flutter-driver`
9. Run the appium server by running `appium --base-path /wd/hub` in a separate terminal
10. cd to the '/test_server/nodejs' directory
11. `npm install` to install node modules
12. Run the test by `npm start`

------------

#### To migrate from Appium 1.x to Appium 2.x (If you get the error 500)

1. `npm install -g appium@next` to upgrade
2. `appium driver install uiautomator2` to install the latest driver version
3. `appium driver install xcuitest@4.12.2` to install a specific driver version
4. `appium driver install --source=npm appium-flutter-driver` to install the new Flutter driver version