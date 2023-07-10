export interface IHostStateInterface {
    power?: {
        powerState: 'on' | 'off';
    };
    toggle?: {
        [key: number]: { toggleState: 'on' | 'off' };
    };
    brightness?: {
        brightness: number;
    };
    'color-temperature'?: {
        colorTemperature: number;
    };
    'color-rgb'?: {
        blue: number;
        green: number;
        red: number;
    };
    'motor-control'?: {
        motorControl: 'open' | 'stop' | 'close';
    };
    percentage?: {
        percentage: number;
    };
}
