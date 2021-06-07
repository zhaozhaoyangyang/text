import { post } from '../utils/request'
//歌手列表
export const getSinger = () => post('/top/artists')
//获取歌手歌曲
export const reqsings = (id) =>post('/artist/songs?id='+id)