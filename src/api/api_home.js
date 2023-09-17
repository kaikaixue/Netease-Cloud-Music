import axios from '../http/request.js'

// 获取默认搜索
export const searchDefault = () => {
    return axios({
        url: '/api/search/default',
        method: 'post',
    })
}

// 获取搜索热榜（详细）
export const searchHotDetail = () => {
    return axios({
        url: '/api/search/hot/detail',
        method: 'post',
    })
}

// 获取搜索推荐 /search/suggest?keywords=海阔天空
export const searchSuggest = (keywords) => {
    return axios({
        url: `/api/search/suggest?keywords=${keywords}`,
        method: 'post',
    })
}
