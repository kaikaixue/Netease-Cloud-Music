import axios from '../http/request.js'

// 获取默认搜索
export const searchDefault = () => {
    return axios({
        url: '/api/search/default',
        method: 'post',
    })
}