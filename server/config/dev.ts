export const devConf = {
    nodeApp: {
        env: 'dev',
        port: 8325,
        dataPath: '',
        dbPath: '',
        name: 'mqtt2cube-tasmota',
        version: '0.0.1',
    },
    auth: {
        appId: 'your-appid',
        appSecret: 'your-secret',
    },
    iHost: {
        api: 'http://192.168.31.214/open-api/v1/rest',
    },
    log: {
        path: 'log/logFile/total_dev.log',
        pattern: '-yyyy-MM-dd.log',
    },
    /** 本地连接的ip，主要用于service address */
    localIp: 'http://192.168.31.180:8325',
    /** 获取网关凭证的等待时长 (ms) */
    getGatewayTokenTimeout: 300000,
};
