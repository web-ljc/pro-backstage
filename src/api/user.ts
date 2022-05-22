import request from "../utils/request";

export const getUserList = (page: number = 1) => {
  return request({
    url: '/admin/userList',
    params: {
      page
    }
  })
}

export const data = [
  {id: 1, name: 'zs', age: 32, tags: ['停用']},
  {id: 2, name: 'ls', age: 27, tags: ['启用']},
  {id: 3, name: 'ww', age: 60, tags: ['启用']},
  {id: 4, name: 'zs', age: 32, tags: ['启用']},
  {id: 5, name: 'xixi', age: 32},
  {id: 6, name: 'hha', age: 32},
  {id: 7, name: 'xixi', age: 32},
  {id: 8, name: 'hha', age: 32},
  {id: 9, name: 'xixi', age: 32},
  {id: 10, name: 'hha', age: 32},
  {id: 11, name: 'xixi', age: 32},
  {id: 12, name: 'hha', age: 32},
  {id: 13, name: 'xixi', age: 32},
  {id: 14, name: 'hha', age: 32},
]