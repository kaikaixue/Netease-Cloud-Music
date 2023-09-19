import axios from '../http/request.js'

// 手机号登录
export const loginByPhone = (params) => {
    return axios({
        url: `/api/login/cellphone?phone=${params.phone}&password=${params.password}`,
        method: 'post',
    })
}

// 获取二维码key
export const qrCodeLoginKey = (timestamp) => {
    return axios({
        url: `/api/login/qr/key?timestamp=${timestamp}`,
        method: 'get'
    })
}

// 二维码生成
export const qrCodeLoginImg = (key) => {
    return axios({
        url: `/api/login/qr/create?qrimg=true&key=${key}`,
        method: 'get'
    })
}

// 二维码检测扫码状态
export const qrCodeLoginCheck = (key, timestamp) => {
    return axios({
        url: `/api/login/qr/check?key=${key}&timestamp=${timestamp}`,
        method: 'get'
    })
}

// 获取登录状态
export const loginState = (timestamp, cookie) => {
    return axios({
        url: `/api/login/status?timestamp=${timestamp}`,
        method: 'post',
        data: {
            cookie
        }
    })
}