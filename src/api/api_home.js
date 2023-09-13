import { get, post, getBlob } from '@/request'

// 获取默认搜索
export const searchDefault = () => post('/search/default')