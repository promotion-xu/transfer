import Cache from '@/utils/cache';
import fetch from '@/apiService/axios';
const bcrypt = require('bcryptjs');
/**
 * @param username
 * @param password
 */

export const loginByUsername = (username: string, password: string) => {
  const cost = 12;
  const p = new Promise((resolve, reject) => {
    bcrypt.genSalt(cost, (err: Error, salt: string) => {
      bcrypt.hash(password, salt, (err2: Error, hash: string) => {
        fetch.post('/v1/login', {
          username,
          password: hash,
        })
          .then(res => {
            if (res.data && res.data.token) {
              const token = res.data.token;
              Cache.setToken(token);
              Cache.sessionSet('user', {
                username,
              })
              resolve(true);
            }
          })
          .catch(err => {
            reject(err);
          })
      })
    })

  })
  return p;
}

/**
 * 退出登录服务
 * 1. 调用退出登录接口
 * 2. 退出后, 清空所有的sessionStorage 
 */
export const logout = () => {
  const p = new Promise((resolve, reject) => {
    Cache.sessionClear();
    resolve();
  })
}
/**
 * 获取当前用户
 */

export const getCurrentUser = () => {
  if (Cache.sessionGet('user')) {
    return Cache.sessionGet('user').username;
  } else {
    return '';
  }
}