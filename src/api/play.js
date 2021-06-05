import {get} from '../utils/request'
//播放记录
export const reqRecord  = (id)=>get('/user/record/' +id)
//心动模式  智能播放
export const reqList  = (id)=>get('/playmode/intelligence/list/' +id)
//获取音乐 地址
export const reqSongUrl = (id)=>get('/song/url/' +id)
//获取歌词
export const reqSongLyric = (id)=>get('/lyric/' +id)
//歌曲评论
export const reqMusic= (id)=>get('/comment/music/' +id)
//楼层评论
export const reqCommentId= (data)=>get('/comment/floor',data)
//歌曲 详情
export const reqSongDetail= (id)=>get('/song/detail/'+id)
//喜欢音乐
export const reqLikeSong= (id)=>get('/like'+id)

