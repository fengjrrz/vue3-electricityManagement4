import request from '@/utils/axios-req'

export const updateUserInfo = (data) => {
  //查询列表
  return request({
    url: '/user/update',
    method: 'post',
    data
  })
}