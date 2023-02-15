const wdio = require('webdriverio');
const assert = require('assert');
const find = require('appium-flutter-finder');

const osSpecificOps = {
    'appium:platformName': 'Android',
    'appium:deviceName': 'Pixel_4',
    'appium:app': __dirname + '/../../apps/app-debug.apk'
};

const opts = {
    port: 4723,
    path: '/wd/hub',
    capabilities: {
        ...osSpecificOps,
        'appium:automationName': 'Flutter'
    }
};

const validateElementPosition = async (driver, buttonFinder) => {
    const bottomLeft = await driver.execute(
        'flutter:getBottomLeft',
        buttonFinder
    );
    assert.strictEqual(typeof bottomLeft.dx, 'number');
    assert.strictEqual(typeof bottomLeft.dy, 'number');

    const bottomRight = await driver.execute(
        'flutter:getBottomRight',
        buttonFinder
    );
    assert.strictEqual(typeof bottomRight.dx, 'number');
    assert.strictEqual(typeof bottomRight.dy, 'number');

    const center = await driver.execute('flutter:getCenter', buttonFinder);
    assert.strictEqual(typeof center.dx, 'number');
    assert.strictEqual(typeof center.dy, 'number');

    const topLeft = await driver.execute('flutter:getTopLeft', buttonFinder);
    assert.strictEqual(typeof topLeft.dx, 'number');
    assert.strictEqual(typeof topLeft.dy, 'number');

    const topRight = await driver.execute('flutter:getTopRight', buttonFinder);
    assert.strictEqual(typeof topRight.dx, 'number');
    assert.strictEqual(typeof topRight.dy, 'number');
};



/* -------------------------------------------------------------------------- */
/*                                Success Test                                */
/* -------------------------------------------------------------------------- */
(async () => {
    const counterTextFinder = find.byValueKey('counter');
    const buttonFinder = find.byValueKey('increment');

    const driver = await wdio.remote(opts);

    await validateElementPosition(driver, buttonFinder);

    assert.strictEqual(await driver.execute('flutter:checkHealth'), 'ok');
    await driver.execute('flutter:clearTimeline');
    await driver.execute('flutter:forceGC');

    const renderObjectDiagnostics = await driver.execute(
        'flutter:getRenderObjectDiagnostics',
        counterTextFinder, {
        includeProperties: true,
        subtreeDepth: 2
    }
    );
    assert.strictEqual(renderObjectDiagnostics.type, 'DiagnosticableTreeNode');
    assert.strictEqual(renderObjectDiagnostics.children.length, 1);

    const treeString = await driver.execute('flutter: getRenderTree');
    assert.strictEqual(treeString.substr(0, 11), 'RenderView#');

    await driver.switchContext('NATIVE_APP');

    await driver.switchContext('FLUTTER');

    assert.strictEqual(await driver.getElementText(counterTextFinder), '0');

    await driver.elementClick(buttonFinder);
    await driver.touchAction({
        action: 'tap',
        element: {
            elementId: buttonFinder
        }
    });

    assert.strictEqual(await driver.getElementText(counterTextFinder), '2');

    await driver.elementClick(find.byTooltip('Increment'));

    assert.strictEqual(
        await driver.getElementText(counterTextFinder),
        '3'
    );

    driver.deleteSession();
})();



/* -------------------------------------------------------------------------- */
/*                                 Fixed Test                               */
/* -------------------------------------------------------------------------- */
(async () => {
    const counterTextFinder = find.byValueKey('counter');
    const buttonFinder = find.byValueKey('increment');

    const driver = await wdio.remote(opts);

    await validateElementPosition(driver, buttonFinder);

    assert.strictEqual(await driver.execute('flutter:checkHealth'), 'ok');
    await driver.execute('flutter:clearTimeline');
    await driver.execute('flutter:forceGC');

    const renderObjectDiagnostics = await driver.execute(
        'flutter:getRenderObjectDiagnostics',
        counterTextFinder, {
        includeProperties: true,
        subtreeDepth: 2
    }
    );
    assert.strictEqual(renderObjectDiagnostics.type, 'DiagnosticableTreeNode');
    assert.strictEqual(renderObjectDiagnostics.children.length, 1);


    const treeString = await driver.execute('flutter: getRenderTree');
    assert.strictEqual(treeString.substr(0, 11), 'RenderView#');

    await driver.switchContext('NATIVE_APP');

    await driver.switchContext('FLUTTER');

    await driver.elementClick(buttonFinder);
    await driver.touchAction({
        action: 'tap',
        element: {
            elementId: buttonFinder
        }
    });

    assert.strictEqual(await driver.getElementText(counterTextFinder), '2');
    await driver.touchAction({
        action: 'tap',
        element: {
            elementId: buttonFinder
        }
    });

    // Please don't change this Equal Element
    assert.strictEqual(
        await driver.getElementText(counterTextFinder),
        '3'
    );

    driver.deleteSession();
})();



/* -------------------------------------------------------------------------- */
/*                              Task Description                              */
/* -------------------------------------------------------------------------- */
/// Please write a test that is as follows:
///
/// 1. Open the Second Page by tapping on the 'TextButton' widget;
///    You can find the 'TextButton' widget by type
///
/// 2. Scroll down to the 'TextField' widget;
///    You can find the 'TextField' widget by type
///
/// 3. Enter the "Hello World!" value in the 'TextField' widget
///
/// 4. Check that the 'TextField' value has been updated or not
///
/// 5. Check to see if the 'Text' widget under the 'TextField'
///    contains the first 10 characters of the 'TextField' value.
///    If there are more, write "..."
///    You can find the 'Text' widget by it's value.
///
/// 6. Back to the Home Page



/* -------------------------------------------------------------------------- */
/*                                  Task                                  */
/* -------------------------------------------------------------------------- */
(async () => {
    const routeTextButton = find.byType('TextButton');
    const textField = find.byType('TextField');
    const textFieldValue = "Hello World"
    const textValue = "Hello Worl..."


    const driver = await wdio.remote(opts);
    await validateElementPosition(driver, routeTextButton);

    assert.strictEqual(await driver.execute('flutter:checkHealth'), 'ok');
    await driver.execute('flutter:clearTimeline');
    await driver.execute('flutter:forceGC');
    await driver.switchContext('NATIVE_APP');

    await driver.switchContext('FLUTTER');

    await driver.elementClick(routeTextButton);
    await driver.execute('flutter:scrollUntilVisible', find.byType('ListView'), { item: textField, dxScroll: 90, dyScroll: -400 });
    await validateElementPosition(driver, textField);

    await driver.elementSendKeys(textField, textFieldValue);
    assert.strictEqual(
        await driver.getElementText(textField),
        textFieldValue
    );
    if (textValue.includes(textFieldValue.slice(0, 10))) {
        console.log("It contains first 10 characters of TextFieldValue");
    } else {
        await driver.elementSendKeys(textField, 'Hello World......');
    }
    await driver.elementClick(find.byType('BackButton'));
    driver.deleteSession();
})();