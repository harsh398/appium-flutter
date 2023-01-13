## To run the automation locally

### Test enviorment setup
- Download and install Android Studio from [here](https://developer.android.com/studio "here")
- Make sure you have added the ANDROID_HOME and JAVA_HOME paths to your environment variables
- Open Android Studio and create an Android Emulator Called 'Pixel_4' and run it
- You can find the app APK on the '/test_server/apps' directory
- Make sure Node.js and npm are installed

### Appium setup
1. Install typescript and appium 2 globally by running `npm i -g typescript appium@next`
2. Install Appium Flutter Driver globally by running `appium driver install --source=npm appium-flutter-driver`
3. Run the appium server by running `appium --base-path /wd/hub` in a separate terminal
4. cd to the '/test_server/nodejs' directory
5. Run the test by `npm start`

