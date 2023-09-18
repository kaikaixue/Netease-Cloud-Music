import axios from '../http/request.js'

// 手机号登录
export const loginByPhone = (params) => {
    return axios({
        url: `/api/login/cellphone?phone=${params.phone}&password=${params.password}`,
        method: 'post',
    })
}

