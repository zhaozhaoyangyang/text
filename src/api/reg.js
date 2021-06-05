import { get } from '../utils/request'
//手机号注册
export const reqReg = (data) =>get('/register/cellphone',data)
//验证手机号
export const reqHasPhone = (data) =>get('/cellphone/existence/check',data)
