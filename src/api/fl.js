import { post } from '../utils/request'

export const getSinger = () => post('/top/artists')