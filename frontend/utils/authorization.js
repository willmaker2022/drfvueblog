// frontend/src/utils/authorization.js

import axios from 'axios';

async function authorization() {
    const storage = localStorage;

    let hasLogin = false;
    let username = storage.getItem('username.product');

    const expiredTime = Number(storage.getItem('expiredTime.product'));
    const current = (new Date()).getTime();
    const refreshToken = storage.getItem('refresh.product');
    // console.log('expiredTime: ', expiredTime);
    // console.log('current: ', current);
    // console.log('refresh token: ', refreshToken);

    // 初始 token 未过期
    if (expiredTime > current) {
        hasLogin = true;
        console.log('authorization access')
    }
    // 初始 token 过期
    // 申请刷新 token
    else if (refreshToken !== null) {
        console.log('refresh token ing')
        try {
            let response = await axios.post('/api/token/refresh/', {refresh: refreshToken});
            // console.log('refresh token response: ',response.data.refresh);
            const nextExpiredTime = Date.parse(response.headers.date) + 10080000;

            storage.setItem('access.product', response.data.access);
            storage.setItem('expiredTime.product', nextExpiredTime);
            // storage.removeItem('refresh.product');
            storage.setItem('refresh.product', response.data.refresh);

            hasLogin = true;

            console.log('authorization refresh')
        }
        catch (err) {
            storage.clear();
            hasLogin = false;

            console.log('authorization err')
        }
    }
    // 无任何有效 token
    else {
        storage.clear();
        hasLogin = false;
        console.log('authorization exp')
    }

    console.log('authorization done');

    return [hasLogin, username]
}

export default authorization;