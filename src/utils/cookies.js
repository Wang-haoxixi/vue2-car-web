/*
 * @Author: wanghao 1570058176@qq.com
 * @Date: 2022-06-21 22:02:39
 * @LastEditors: wanghao 1570058176@qq.com
 * @LastEditTime: 2022-06-21 22:02:43
 * @FilePath: \web\src\utils\cookies.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Cookies from "js-cookie";
// 变量
const tokenKey = "tokenAdmin";
const userNameKey = "username";
// 获取token
export function getToken() { return Cookies.get(tokenKey); }
// 写入token
export function setToken(value) { return Cookies.set(tokenKey, value); }
// 删除token
export function removeToken() { return Cookies.remove(tokenKey); }
// 写入userName
export function setUsername(value) { return Cookies.set(userNameKey, value); }
// 获取userName
export function getUsername() { return Cookies.get(userNameKey); }
// 删除userName
export function removeUsername() { return Cookies.remove(userNameKey); }

/****************************************
 * ***** 用户
 * ********************************************************* */

// 变量
const accountToken = "accountToken";
const accountUsername = "accountUsername";
// 获取token
export function getAccountToken() { return Cookies.get(accountToken); }