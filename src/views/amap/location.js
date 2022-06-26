/*
 * @Description: 获取高德定位结果
 * @Author: wanghao
 * @Date: 2022-06-26 20:41:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-26 21:38:13
 */

let geolocation = null; // 定义一个定位
export function selfLocation (params) {
  /**
   * 浏览器定位
   */
  // 若不存在实例，才创建一个新的实例对象，否则就用已有的实例（优化）
  if (!geolocation) {
    // AMap.Geolocation 构造函数，创建浏览器定位实例
    geolocation = new AMap.Geolocation({
      enableHighAccuracy: true, //是否使用高精度定位，默认:true
      timeout: 10000, //超过10秒后停止定位，默认：5s
      showButton: false, //显示定位按钮，默认：true
      zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      showCircle: false, //定位成功后用圆圈表示定位精度范围，默认：true
      panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
      showMarker: false, //定位成功时是否在定位位置显示一个Marker 默认值：true
      // markerOptions: { //定位点Marker的配置，不设置该属性则使用默认Marker样式
      //   content: " ",
      // }
    });
  }
  // 向地图的控件中放入定位实例对象
  params.map.addControl(geolocation);

  // 一种是在 getCurrentPosition的时候传入回调函数来处理定位结果
  geolocation.getCurrentPosition(function(status, result) {
    // console.log(status, result)
    // if (status == 'complete') {
    //   console.log(111)
    // } else {
    //   console.log(222);
    // }
  });

  // 另一种是通过事件监听来取得定位结果
  if (params.onComplete && typeof params.onComplete === 'function') {
    AMap.event.addListener(geolocation, 'complete', params.onComplete); //返回定位信息
  }
  if (params.onError && typeof params.onError === 'function') {
    AMap.event.addListener(geolocation, 'error', params.onError); //返回定位出错信息
  }
}