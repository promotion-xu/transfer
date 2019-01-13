import Cache from '@/utils/cache';
const bcrypt = require('bcryptjs');
/**
 * 密码使用 bcrypt 加密, cost = 12 指定hash次数, 2的12次方计算
 * @param username
 * @param password
 */

export const loginByUsername = (username: string, password: string) => {
  const cost = 12;
  const p = new Promise( (resolve, reject) => {
    bcrypt.getSalt(cost, (err1: Error, salt: string) => {
      console.log(salt);
      bcrypt.hash(password, salt, (err2: Error, hash: string) => {
        
      })
    })
  })
}