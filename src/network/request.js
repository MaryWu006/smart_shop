import axios from 'axios'

/** 查询商店，选择商店位置 */
export const checkStore = params => {
  return axios.post('/api/biz/v01/listBizStoreWithoutToken.do', params)
}
/** 首页一级分类 */
export const selectCatalogParent = params => {
  return axios.post("/api/biz/v01/selectTopCatalogWithoutToken.do", params)
}
/** 首页二级分类 */
export const selectCatalog = params => {
  return axios.post('/api/biz/v01/selectCatalogWithoutToken.do', params)
}

// export function request(config) {
//   const instance = axios.create({
//     baseURL: "http://igo.cmhg8.com",
//     timeout: 5000
//   })

//   instance.interceptors.request.use(config => {
//     return config
//   }, err => {
//     console.log(err)
//   })
//   instance.interceptors.response.use(res => {
//     return res.data
//   }, err => {
//     console.log(err)
//   })
  
//   return instance(config)
// }