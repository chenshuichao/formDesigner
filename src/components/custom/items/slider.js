/**
 * 单行&多行输入框
 */
export let slider = {
  id:'',
  compType: 'slider',
  ele: 'el-slider',
  //控件名称(左侧显示)
  name:'滑块',
  label: '滑块',
  //图标，暂不启用
  icon:'',
  //暂时默认为true，无法更改，后期考虑某些时候无法配置
  config: true,
  // 控件左侧label内容
  showLabel:true,
   //栅格间隔
  gutter:15,
  labelWidth: '80',
  value: undefined,
  span: 12,
  disabled: false,
  required: true,
  //最小值
  min: 0,
  //最大值
  max: 20,
  //步长
  step: 1,
  //是否显示断点
  'show-stops': true,
  //是否显示tooltip
  'show-tooltip': true,
  //范围选择  1,50
  range: false  
}