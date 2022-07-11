<!--
 * @Description: CRUD - base基础 （备注：data数据的对象数组，option为表格要配置的数据列）
 * @Author: wh
 * @Date: 2022-07-11 11:28:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-11 13:42:04
-->
<template>
  <div>
    <!-- 演示demo区 -->
    <el-row style="margin-bottom:20px;font-size:15px">
      <el-col :span="4">等待加载框: <el-switch size="small" v-model="showLoading"> </el-switch>
      </el-col>
      <el-col :span="4">显示边框: <el-switch size="small" v-model="showBorder"> </el-switch>
      </el-col>
      <el-col :span="4">显示斑马纹: <el-switch size="small" v-model="showStripe"> </el-switch>
      </el-col>
      <el-col :span="4">显示索引: <el-switch size="small" v-model="showIndex"> </el-switch>
      </el-col>
      <el-col :span="4">显示多选框: <el-switch size="small" v-model="showCheckbox"> </el-switch>
      </el-col>
      <el-col :span="4">显示表头: <el-switch size="small" v-model="showHeader"> </el-switch>
      </el-col>
      <el-col :span="4">显示分页: <el-switch size="small" v-model="showPage"> </el-switch>
      </el-col>
      <el-col :span="4">卡片模式: <el-switch size="small" v-model="showCard"> </el-switch>
      </el-col>
    </el-row>
    <!-- 按钮类型 -->
    <el-row style="margin-bottom:20px">
      类型：<el-radio-group v-model="menuType" size="small">
        <el-radio-button label="text">默认</el-radio-button>
        <el-radio-button label="icon">菜单按钮</el-radio-button>
        <el-radio-button label="text">文本按钮</el-radio-button>
        <el-radio-button label="menu">合并菜单</el-radio-button>
      </el-radio-group>
    </el-row>
    <!-- 按钮大小 -->
    <el-row style="margin-bottom:20px">
      大小：<el-radio-group v-model="sizeValue" size="small">
        <el-radio-button label="small">默认</el-radio-button>
        <el-radio-button label="medium">medium</el-radio-button>
        <el-radio-button label="small">small</el-radio-button>
        <el-radio-button label="mini">mini</el-radio-button>
      </el-radio-group>
    </el-row>
    <!-- 表格 -->
    <avue-crud :data="data" :option="option" :table-loading="showLoading" :page.sync="page">
      <!-- 下拉自定义 -->
      <template slot-scope="scope" slot="menuBtn">
        {{scope.row}}
        <el-dropdown-item divided>自定义按钮11</el-dropdown-item>
      </template>
      <!-- 按钮自定义 -->
      <template slot-scope="{type,size}" slot="menu">
        <el-button :type="type" :size="size">自定义按钮22</el-button>
      </template>
    </avue-crud>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // 分页
        page: {
          total: 100,
          currentPage: 1
        },
        // 表格数据
        data: [{
          name: '张三',
          sex: '男'
        }, {
          name: '李四',
          sex: '女'
        }, {
          name: '王五',
          sex: '女'
        }, {
          name: '赵六',
          sex: '男'
        }],
        showLoading: false, //等待加载框
        showBorder: false, //显示边框
        showStripe: false, //显示斑马纹
        showHeader: true, //显示表头
        showIndex: true, //显示索引
        showCheckbox: false, //显示多选框
        showPage: true, //显示分页
        showCard: false, //卡片模式
        menuType: 'text', //按钮类型
        sizeValue: 'small' //整体字体大小
      }
    },
    computed: {
      // 配置项(只要data中数据有改变，那么option就重新计算并返回,HTML重新渲染)
      option () {
        return {
          title: '表格的标题1111',
          titleSize: 'h3',
          titleStyle: {
            fontSize: '20px',
            textAlign: 'center',
            color: '#CCCCCC'
          },
          card: this.showCard,
          border: this.showBorder,
          stripe: this.showStripe,
          showHeader: this.showHeader,
          index: this.showIndex,
          size: this.sizeValue,
          selection: this.showCheckbox,
          page: this.showPage,
          align: 'center',
          menuAlign: 'center',
          menuType: this.menuType,
          menuBtnTitle: '自定义名称',
          // 抬头
          column: [{
              label: '姓名',
              prop: 'name',
              search: true, //字段搜索
            },
            {
              label: '性别',
              prop: 'sex',
              // search: true,
            }
          ]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>