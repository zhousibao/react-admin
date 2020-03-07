const menuList = [
  {
      title: '首页',
      key: '/admin/home'
  },
  {
      title: '组件',
      key: '/admin/ui',
      children: [
          {
              title: '按钮',
              key: '/admin/ui/buttons',
          },
          {
              title: '弹框',
              key: '/admin/ui/modals',
          },
          {
              title: 'Tab页签',
              key: '/admin/ui/tabs',
          },
          {
              title: 'gallery图片画廊',
              key: '/admin/ui/gallery',
          },
          {
              title: '轮播图',
              key: '/admin/ui/carousel',
          }
      ]
  },
  {
      title: '表单',
      key: '/admin/form',
      children: [
          {
              title: '登录',
              key: '/admin/form/login',
          },
          {
              title: '注册',
              key: '/admin/form/register',
          }
      ]
  },
  {
      title: '表格',
      key: '/admin/table',
      children: [
          {
              title: '基础表格',
              key: '/admin/table/basic',
          },
          {
              title: '选择表格',
              key: '/admin/table/selection',
          },
          {
            title: '伸缩表格',
            key: '/admin/table/resize',
          }
      ]
  },
  {
      title: '富文本',
      key: '/admin/rich'
  },
  {
      title: '城市管理',
      key: '/admin/city'
  },
  {
      title: '订单管理',
      key: '/admin/order',
      children: [
          {
              title: '订单详情',
              key: 'detail'
          },
          {
              title: '结束订单',
              key: 'finish'
          }
      ]
  },
  {
      title: '员工管理',
      key: '/admin/user'
  },
  {
      title: '车辆地图',
      key: '/admin/bikeMap'
  },
  {
      title: '图标',
      key: '/admin/charts',
      children: [
          {
              title: '柱形图',
              key: '/admin/charts/bar'
          },
          {
              title: '饼图',
              key: '/admin/charts/pie'
          },
          {
              title: '折线图',
              key: '/admin/charts/line'
          },
      ]
  },
  {
      title: '权限设置',
      key: '/admin/permission'
  }
];
export default menuList;