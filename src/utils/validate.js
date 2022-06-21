/*
 * @Author: wanghao 1570058176@qq.com
 * @Date: 2022-06-21 22:04:04
 * @LastEditors: wanghao 1570058176@qq.com
 * @LastEditTime: 2022-06-21 22:04:13
 * @FilePath: \web\src\utils\validate.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function validate_email(value) {
  let regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return regEmail.test(value);
}

export function validate_phone(value) { // 1  3    713746864   13、14、15、17、18、19
  let regPhone = /^1[345789]\d{9}$/;
  return regPhone.test(value);
}

export function validate_password(value) {
  let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  return regPassword.test(value);
}