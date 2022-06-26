/*
 * @Description: location仓库
 * @Author: wanghao
 * @Date: 2022-06-26 22:27:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-26 22:52:09
 */


const state = {
  // 用于定位
  isLocation: false,
};
const getters = {};
const mutations = {
  // 是否进行定位
  CHANGE_LOCATION_STATUS (state) {
    state.isLocation = !state.isLocation;
    // console.log(state.isLocation);
  }
};
const actions = {};

export default {
  namespaced: true, // 命名空间
  state,
  getters,
  mutations,
  actions,
}