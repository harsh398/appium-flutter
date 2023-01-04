# To run the automation locally

1. Make sure node and npm are installed locally
2. cd to ./driver directory
3. `npm install -g typescript` for typescript compile to work globally
4. `npm install` to install node modules 
5. Run `npm link`
6. Install Appium globally by running `npm i -g appium`
7. Run the appium server by running `appium --base-path /wd/hub` in a separate terminal
8. You can find the app apk on the 'apps' directory
9. Create an Android Emulator Called 'Pixel_4' and run it
10. Run the test by `APPIUM_OS=android npm start`




# To migrate from Appium 1.x to Appium 2.x (Optional)

1. `npm install -g appium@next` to upgrade
2. `appium driver install uiautomator2` to install the latest driver version
3. `appium driver install xcuitest@4.12.2` to install a specific driver version
4. `appium driver install --source=npm appium-flutter-driver` to install the new Flutter driver version