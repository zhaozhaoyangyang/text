import {TOKEN} from './common'


//登录状态效验
export const isLogin = () =>{
    if(localStorage.getItem(TOKEN)){
        return true
    }
    return false
};

//储存token
export const setToken = (token) =>{
    localStorage.setItem(TOKEN,token)
}

//获取token
export const getToken = () =>{
  return  localStorage.getItem(TOKEN)
}


//销毁token
export const removeToken = ()=>{
    localStorage.removeItem(TOKEN)
}