<template>
  <el-row :span="24">
    <el-col :span="6">
      值:{{form}}<br />
      <avue-input-icon v-model="form" placeholder="请选择图标" :icon-list="iconList"></avue-input-icon>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {
        form: 'el-icon-info',
        iconList: [
          // 阿里图标-Symbol图标
          {
            label: '阿里图标-Symbol图标',
            list: [{
                label: '机构',
                value: '#icon-jigou'
              },
              {
                label: '短信管理',
                value: '#icon-duanxinguanli'
              },
              {
                label: '发票管理系统',
                value: '#icon-fapiaoguanlixitong'
              },
              {
                label: '角色',
                value: '#icon-jiaose'
              },
              {
                label: '黑名单',
                value: '#icon-heimingdan2'
              },
              {
                label: 'KHCFDC_附件',
                value: '#icon-fujian4'
              },
              {
                label: '文档',
                value: '#icon-wendang3'
              },
              {
                label: '刷卡',
                value: '#icon-shuaka'
              },
              {
                label: '停车',
                value: '#icon-tingche3'
              },
              {
                label: '对象存储OSS',
                value: '#icon-duixiangcunchuOSS'
              },
              {
                label: '反馈',
                value: '#icon-fankui2'
              },
              {
                label: '短信',
                value: '#icon-ziyuan1'
              },
              {
                label: '对象存储服务',
                value: '#icon-beikongshuiwupingtaimenhu-tubiao_duixiangcunchufuwu'
              },
              {
                label: '数据库_jurassic',
                value: '#icon-jurassic_data'
              },
              {
                label: '日志',
                value: '#icon-rizhi1'
              },
              {
                label: '权限',
                value: '#icon-quanxian4'
              },
              {
                label: '订单',
                value: '#icon-5'
              },
              {
                label: '机构',
                value: '#icon-jigou1'
              },
              {
                label: '机构人员',
                value: '#icon-jigourenyuan'
              },
              {
                label: '角色管理',
                value: '#icon-jiaoseguanli4'
              },
              {
                label: '角色管理',
                value: '#icon-jiaoseguanli5'
              },
              {
                label: '数据监控',
                value: '#icon-shujujiankong'
              },
              {
                label: '活动展示',
                value: '#icon-huodongzhanshi'
              },
              {
                label: 'vip invitation',
                value: '#icon-vipinvitation'
              },
              {
                label: '角色管理',
                value: '#icon-jiaoseguanli6'
              },
              {
                label: '用户',
                value: '#icon-user'
              },
              {
                label: '日志',
                value: '#icon-icon_A'
              },
              {
                label: 'dg 数据库网关',
                value: '#icon-dgshujukuwangguan'
              },
              {
                label: 'oss 对象存储',
                value: '#icon-ossduixiangcunchu'
              },
              {
                label: 'oss 对象存储',
                value: '#icon-ossduixiangcunchu1'
              },
              {
                label: '短信',
                value: '#icon-duanxin2'
              },
              {
                label: '机构',
                value: '#icon-jigou2'
              },
              {
                label: '展示',
                value: '#icon-zhanshi'
              },
              {
                label: 'VIP',
                value: '#icon-VIP1'
              },
              {
                label: '反馈',
                value: '#icon-fankui3'
              },
              {
                label: '反馈',
                value: '#icon-fankui4'
              },
              {
                label: '用户',
                value: '#icon-yonghu'
              },
              {
                label: '进出明细',
                value: '#icon-jinchumingxi'
              },
              {
                label: '日志',
                value: '#icon-ziyuan160'
              },
              {
                label: '岗位',
                value: '#icon-gangwei1'
              },
              {
                label: '短信',
                value: '#icon-duanxin3'
              },
              {
                label: '图表',
                value: '#icon-tubiao1'
              },
              {
                label: '停车',
                value: '#icon-tingche4'
              },
              {
                label: '微信',
                value: '#icon-weixin3'
              },
              {
                label: '日志',
                value: '#icon-icon_rzhi'
              },
              {
                label: '反馈',
                value: '#icon-fankui5'
              },
              {
                label: '反馈',
                value: '#icon-fankui6'
              },
              {
                label: '岗位管理',
                value: '#icon-gangweiguanli'
              },
              {
                label: '字典管理',
                value: '#icon-zidianguanli'
              },
              {
                label: '反馈',
                value: '#icon-fankui7'
              },
              {
                label: '文档',
                value: '#icon-wendang4'
              },
              {
                label: '订单',
                value: '#icon-biaoqianA01_dingdan-14'
              },
              {
                label: '机构',
                value: '#icon-jigou3'
              },
              {
                label: '岗位信息',
                value: '#icon-gangweixinxi'
              },
              {
                label: '反馈',
                value: '#icon-fankui8'
              },
              {
                label: '机构性质',
                value: '#icon-tubiaozhizuomoban_jigouxingzhi'
              },
              {
                label: '权限',
                value: '#icon-quanxian5'
              },
              {
                label: '进出',
                value: '#icon-tubiaozhizuomoban-10'
              },
              {
                label: '岗位调动',
                value: '#icon-tubiaozhizuomoban-98'
              },
              {
                label: '展板展示',
                value: '#icon-zhanbanzhanshi'
              },
              {
                label: '发票',
                value: '#icon-fapiao'
              },
              {
                label: '文档',
                value: '#icon-document'
              },
              {
                label: '权限',
                value: '#icon-quanxian6'
              },
              {
                label: '文档',
                value: '#icon-wendang5'
              },
              {
                label: '短信余额',
                value: '#icon-duanxinyue'
              },
              {
                label: '用户',
                value: '#icon-user-01'
              },
              {
                label: '角色',
                value: '#icon-jiaose1'
              },
              {
                label: '发票',
                value: '#icon-fapiao1'
              },
              {
                label: '消息 短信 信息',
                value: '#icon-xiaoxiduanxinxinxi'
              },
              {
                label: '监控',
                value: '#icon-jiankong'
              },
              {
                label: '数据库',
                value: '#icon-database-fill'
              },
              {
                label: '黑名单-02',
                value: '#icon-heimingdan-02'
              },
              {
                label: '黑名单管理',
                value: '#icon-heimingdanguanli'
              },
              {
                label: '短信',
                value: '#icon-duanxin4'
              },
              {
                label: '订单',
                value: '#icon-dingdan2'
              },
              {
                label: '文件类型-附件',
                value: '#icon-wenjianleixing-fujian'
              },
              {
                label: '数据监控',
                value: '#icon-shujujiankong1'
              },
              {
                label: '角色管理',
                value: '#icon-jiaoseguanli_huaban1'
              },
              {
                label: '发票',
                value: '#icon-fapiao2'
              },
              {
                label: '用户',
                value: '#icon-yonghu1'
              },
              {
                label: '反馈',
                value: '#icon-fankui9'
              },
              {
                label: '卡包',
                value: '#icon-kabao'
              },
              {
                label: '数据库',
                value: '#icon-ziyuan87'
              },
              {
                label: '日志',
                value: '#icon-rizhi2'
              },
              {
                label: '停车场',
                value: '#icon-tingchechang3'
              },
              {
                label: 'vip-card',
                value: '#icon-vip-card'
              },
              {
                label: '角色管理',
                value: '#icon-jiaoseguanli7'
              },
              {
                label: '日志',
                value: '#icon-rizhi3'
              },
              {
                label: '数据化展示',
                value: '#icon-shujuhuazhanshi'
              },
              {
                label: '反馈',
                value: '#icon-fankui'
              },
              {
                label: '短信',
                value: '#icon-duanxin'
              },
              {
                label: '角色管理',
                value: '#icon-jiaoseguanli'
              },
              {
                label: '停车场',
                value: '#icon-tingchechang1'
              },
              {
                label: '微信',
                value: '#icon-weixin'
              },
              {
                label: '黑名单',
                value: '#icon-chakantiezigengduoheimingdan'
              },
              {
                label: '文档',
                value: '#icon-07'
              },
              {
                label: '机构建筑',
                value: '#icon-jigoujianzhu'
              },
              {
                label: '停车场',
                value: '#icon-tingchechang2'
              },
              {
                label: '微信',
                value: '#icon-weixin1'
              },
              {
                label: '黑名单核查',
                value: '#icon-tubiao_Artboard'
              },
              {
                label: '附件',
                value: '#icon-fujian'
              },
              {
                label: '附件',
                value: '#icon-fujian1'
              },
              {
                label: '卡',
                value: '#icon-qia'
              },
              {
                label: '岗位权限',
                value: '#icon-gangweiquanxian'
              },
              {
                label: '角色管理',
                value: '#icon-jiaoseguanli1'
              },
              {
                label: '黑名单',
                value: '#icon-heimingdan'
              },
              {
                label: '停车',
                value: '#icon-tingche'
              },
              {
                label: '数据库',
                value: '#icon-database'
              },
              {
                label: '数据库体系 database architecture',
                value: '#icon-zuzhiheguanlitubiao-'
              },
              {
                label: '对象存储new',
                value: '#icon-duixiangcunchu'
              },
              {
                label: '停车',
                value: '#icon-tingche1'
              },
              {
                label: '角色管理',
                value: '#icon-drxx88'
              },
              {
                label: '卡包',
                value: '#icon-qiabao'
              },
              {
                label: '黑名单查询',
                value: '#icon-heimingdanchaxun'
              },
              {
                label: '停车',
                value: '#icon-tingche2'
              },
              {
                label: '订单',
                value: '#icon-dingdan'
              },
              {
                label: '卡票',
                value: '#icon-qiapiao'
              },
              {
                label: '数据库',
                value: '#icon--'
              },
              {
                label: '文档',
                value: '#icon-wendang'
              },
              {
                label: '反馈',
                value: '#icon-fankui1'
              },
              {
                label: '发票',
                value: '#icon-icon-test'
              },
              {
                label: '订单',
                value: '#icon-dingdan1'
              },
              {
                label: '用户',
                value: '#icon-techreport-'
              },
              {
                label: '进出',
                value: '#icon-jinchu'
              },
              {
                label: '文档',
                value: '#icon-wendang1'
              },
              {
                label: '文档',
                value: '#icon-wendang2'
              },
              {
                label: '文档',
                value: '#icon-tubiaozhizuomobanyihuifu-'
              },
              {
                label: '短信',
                value: '#icon-duanxin1'
              },
              {
                label: '字典',
                value: '#icon-zidian'
              },
              {
                label: 'VIP客户停车',
                value: '#icon-ziyuan'
              },
              {
                label: '微信',
                value: '#icon-weixin2'
              },
              {
                label: '1角色管理',
                value: '#icon-jiaoseguanli2'
              },
              {
                label: '黑名单',
                value: '#icon-heimingdan1'
              },
              {
                label: '订单',
                value: '#icon-xingzhuanggongnengtubiao-'
              },
              {
                label: '附件',
                value: '#icon-fujian2'
              },
              {
                label: 'oss 对象存储OSS',
                value: '#icon-ossduixiangcunchuOSS'
              },
              {
                label: '图表',
                value: '#icon-tubiao'
              },
              {
                label: '短信2-01',
                value: '#icon-duanxin-'
              },
              {
                label: '管教岗位',
                value: '#icon-guanjiaogangwei'
              },
              {
                label: '权限',
                value: '#icon-icon--quanxian'
              },
              {
                label: '文件-日志',
                value: '#icon-wj-rz'
              },
              {
                label: '数据库',
                value: '#icon-shujuku'
              },
              {
                label: '权限',
                value: '#icon-quanxian'
              },
              {
                label: '权限',
                value: '#icon-quanxian1'
              },
              {
                label: '角色管理',
                value: '#icon-jiaoseguanli3'
              },
              {
                label: '黑名单',
                value: '#icon-cedaohang-kehuguanli'
              },
              {
                label: '权限',
                value: '#icon-quanxian2'
              },
              {
                label: '日志',
                value: '#icon-rizhi'
              },
              {
                label: '岗位调动@2x',
                value: '#icon-gangweitiaodongx'
              },
              {
                label: '短信',
                value: '#icon-mobile'
              },
              {
                label: 'vip',
                value: '#icon-vip'
              },
              {
                label: '附件',
                value: '#icon-fujian3'
              },
              {
                label: '字典',
                value: '#icon-zidian1'
              },
              {
                label: 'VIP',
                value: '#icon-VIP'
              },
              {
                label: '收藏用户',
                value: '#icon-shoucangyonghu'
              },
              {
                label: '29-数据字典',
                value: '#icon--shujuzidian'
              },
              {
                label: '权限',
                value: '#icon-quanxian3'
              },
              {
                label: '岗位',
                value: '#icon-gangwei'
              },
              {
                label: '字典',
                value: '#icon-zidian2'
              },
              {
                label: '停车场',
                value: '#icon-tingchechang'
              }
            ]
          },
          // 基本图标
          {
            label: '基本图标',
            list: ['el-icon-info', 'el-icon-error', 'el-icon-error', 'el-icon-success', 'el-icon-warning', 'el-icon-question']
          },
          // 方向图标
          {
            label: '方向图标',
            list: ['el-icon-info', 'el-icon-back', 'el-icon-arrow-left', 'el-icon-arrow-down', 'el-icon-arrow-right', 'el-icon-arrow-up']
          },
          // 符号图标
          {
            label: '符号图标',
            list: ['el-icon-plus', 'el-icon-minus', 'el-icon-close', 'el-icon-check']
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>