import { get } from '../utils/request'
//电台推荐
export const dtTuijian = (data) =>get('/dj/personalize/recommend',data)
//热门电台
export const reqHot = (data) =>get('/dj/hot',data)
//节目榜
export const reqBang = (data) =>get('/dj/program/toplist',data)
//24小时节目榜
export const reqTwenty  = (data) =>get('/dj/program/toplist/hours',data)
//24小时主播榜
export const reqPeople = (data) =>get('/dj/toplist/hours',data)
//主播新人榜
export const reqNewPeople = (data) =>get('/dj/toplist/newcomer',data)
//最热主播榜
export const reqHotPopular = (data) =>get('/dj/toplist/popular',data)
//新晋电台榜/热门电台榜
export const reqToplist= (data) =>get('/dj/toplist',data)
//分类推荐
export const reqClassify= (data) =>get('/dj/recommend/type',data)
//节目详情
export const reqDetail= (id) =>get('/dj/program/detail'+id)
//今日优选
export const reqPerfered= () =>get('/dj/today/perfered')
