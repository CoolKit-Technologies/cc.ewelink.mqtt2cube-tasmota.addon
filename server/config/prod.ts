export const prodConf = {
    nodeApp: {
        env: 'prod',
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
        api: 'http://ihost/open-api/v1/rest',
    },
    log: {
        path: 'log/logFile/total_prod.log',
        pattern: '-yyyy-MM-dd.log',
    },
    /** 启动的ip */
    localIp: 'http://ihost:8325',
    /** 获取网关凭证的等待时长 (ms) */
    getGatewayTokenTimeout: 300000,
};
