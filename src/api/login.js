import { get } from '../utils/request'
//手机登录
export const reqLogin = (data) =>get('/login/cellphone',data)
//邮箱登录
export const reqEmailLogin = (data) =>get('/login',data)
