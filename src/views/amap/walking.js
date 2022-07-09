/*
 * @Description: 步行导航
 * @Author: wanghao
 * @Date: 2022-07-07 22:35:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-08 22:43:46
 */
let walking = null; // 定义一个步行
/**
 * @description: 步行导航
 * @param {Object} params 步行导航规划所需参数
 */
export function toWalking (params) {
  // 若不存在实例，才创建一个新的实例对象，否则就用已有的实例（优化）
  if (!walking) {
    walking = new AMap.Walking({
      map: params.map,
      hideMarkers: true, // 设置隐藏路径规划的起始点图标
      // panel: "panel" // 结果列表的HTML容器id或容器元素，提供此参数后，结果列表将在此容器中进行展示。可选参数
    });
  }
  //根据起终点坐标规划步行路线
  walking.search(params.location_start, params.location_end, (status, result) => {
    // result即是对应的步行路线数据信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_WalkingResult
    if (status === 'complete') {
      if (params.walkingSuccess && typeof params.walkingSuccess === 'function') return params.walkingSuccess(result);
    } else {
      if (params.walkingError && typeof params.walkingError === 'function') return params.walkingError(result);
    }
  });
}