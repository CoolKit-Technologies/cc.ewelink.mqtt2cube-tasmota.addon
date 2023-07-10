import _ from 'lodash';
import ping from 'ping';
import logger from '../log';

/**
 *
 * 睡眠函数
 * @date 18/05/2023
 * @param {number} time
 */
function sleep(time: number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(1);
        }, time)
    })
}



export default {
    sleep
}
