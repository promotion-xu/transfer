





/**
 * 获取JSON数据
 *    使用eval解析
 */
const data = require("../data.json");
export const getJson = () => {
  let obj = eval(data);
  return obj;
}
