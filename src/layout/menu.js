const menuList = [
  {
    title: '首页',
    key: '/admin/home',
    icon: 'home',
  },
  {
    title: '组件',
    key: '/admin/ui',
    icon: 'components',
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
      },
    ],
  },
  {
    title: '表单',
    key: '/admin/form',
    icon: 'form',
    children: [
      {
        title: '登录',
        key: '/admin/form/login',
      },
      {
        title: '注册',
        key: '/admin/form/register',
      },
    ],
  },
  {
    title: '表格',
    key: '/admin/table',
    icon: 'table',
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
      },
    ],
  },
  {
    title: '城市管理',
    key: '/admin/city',
    icon: 'city',
  },
  {
    title: '订单管理',
    key: '/admin/order',
    icon: 'order',
  },
  {
    title: '数据可视化',
    key: '/admin/echarts',
    icon: 'dashboard',
    children: [
      {
        title: '柱形图',
        key: '/admin/echarts/bar',
        icon: 'bar',
      },
      {
        title: '饼图',
        key: '/admin/echarts/pie',
        icon: 'pie',
      },
      {
        title: '折线图',
        key: '/admin/echarts/line',
        icon: 'line',
      },
    ],
  },
  {
    title: '富文本',
    key: '/admin/editor',
    icon: 'edit',
  },
  {
    title: '权限设置',
    key: '/admin/permission',
    icon: 'permission',
  },
];
export default menuList;