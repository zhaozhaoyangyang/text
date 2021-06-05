import {get} from '../utils/request'
//轮播图
export const reqBanner = () =>get('/banner')
//每日推荐歌曲
export const reqSong = () =>get('/recommend/songs')
//每日推荐歌单
export const reqSource = () =>get('/recommend/resource')
//热门核弹分类
export const reqHost = () =>get('/playlist/hot')
//榜单内容摘要
export const reqDetail = () =>get('/toplist/detail')
//歌手帮
export const reqSinger = () =>get('/toplist/artist')
