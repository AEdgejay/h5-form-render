import { toPromise } from './toPromise'
import { globalConfig } from '@/config.js'

// 封装请求
export const request = (method, url, params = {}, header = {}) => {
  const _request = toPromise(uni.request)
  if (method === 'GET' || method === 'get') {
    let _params = ''
    if (Object.keys(params).length > 0) {
      for (const key in params) {
        _params = `${_params}${key}=${params[key]}&`
      }
      url = `${url}?${_params}`
    }
  }

  if (Object.keys(header).length === 0) {
    header = {}
  }

  if (!header.token) {
    const token = uni.getStorageSync(`${globalConfig.tokenStorageKey}`) || ''
    header.token = token
  }

  return _request({
    url: url,
    method: method,
    data: params,
    header: header
  })
}

// 上传文件
export const upLoad = (url, filePath, params, name) => {
  const _upLoad = toPromise(uni.uploadFile)
  const token = uni.getStorageSync(`${globalConfig.tokenStorageKey}`) || ''
  return _upLoad({
    url: url,
    filePath: filePath,
    formData: params,
    name: name,
	header:{token:token}
  })
}


module.export = {
  request,
  upLoad
}
