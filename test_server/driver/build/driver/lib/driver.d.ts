import { BaseDriver } from 'appium/driver';
import { Capabilities } from '@appium/types';
import { IsolateSocket } from './sessions/isolate_socket';
declare class FlutterDriver extends BaseDriver {
    socket: IsolateSocket | null;
    locatorStrategies: string[];
    proxydriver: any;
    proxydriverName: string;
    device: any;
    internalCaps: any;
    opts: any;
    caps: any;
    clearNewCommandTimeout: any;
    startNewCommandTimeout: any;
    receiveAsyncResponse: any;
    relaxedSecurityEnabled: any;
    denyInsecure: any;
    allowInsecure: any;
    proxyWebViewActive: boolean;
    executeElementCommand: (this: FlutterDriver, command: string, elementBase64?: string | undefined, extraArgs?: {}) => Promise<any>;
    executeGetVMCommand: (this: FlutterDriver) => Promise<{
        isolates: [{
            name: string;
            id: number;
        }];
    }>;
    executeGetIsolateCommand: (this: FlutterDriver, isolateId: string | number) => Promise<unknown>;
    execute: (this: FlutterDriver, rawCommand: string, args: any[]) => Promise<any>;
    executeAsync: (this: FlutterDriver, rawCommand: string, args: any[]) => Promise<any>;
    getText: (this: FlutterDriver, el: string) => Promise<any>;
    setValue: (this: FlutterDriver, textInput: string | [string], el: string) => Promise<void>;
    clear: (this: FlutterDriver, el: string) => Promise<void>;
    getScreenshot: (this: FlutterDriver) => Promise<any>;
    click: (this: FlutterDriver, el: string) => Promise<any>;
    longTap: (this: FlutterDriver, gestures: any, ms: any) => Promise<any>;
    tapEl: (this: FlutterDriver, el: string, longPress: boolean) => Promise<any>;
    tap: (this: FlutterDriver, gestures: any, longPress: boolean) => Promise<void>;
    performTouch: (this: FlutterDriver, gestures: any) => Promise<any>;
    getContexts: (this: FlutterDriver) => Promise<any[]>;
    getCurrentContext: (this: FlutterDriver) => Promise<string>;
    setContext: (this: FlutterDriver, context: string) => Promise<void>;
    protected currentContext: string;
    private driverShouldDoProxyCmd;
    constructor(opts: any, shouldValidateCaps: boolean);
    createSession(...args: any[]): Promise<[string, {}]>;
    deleteSession(): Promise<void>;
    activateApp(appId: any): Promise<void>;
    terminateApp(appId: any): Promise<any>;
    validateLocatorStrategy(strategy: string): any;
    validateDesiredCaps(caps: Capabilities): boolean;
    executeCommand(cmd: string, ...args: any[]): Promise<any>;
    getProxyAvoidList(): import('@appium/types').RouteMatcher[];
    proxyActive(): boolean;
    canProxy(): boolean;
}
export { FlutterDriver };
//# sourceMappingURL=driver.d.ts.map