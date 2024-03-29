var _my$getSystemInfoSync = my.getSystemInfoSync(),
    windowWidth = _my$getSystemInfoSync.windowWidth;

Component({
  props: {
    className: '',
    activeCls: '',
    tabBarUnderlineColor: '#108ee9',
    // 选中选项卡下划线颜色
    tabBarActiveTextColor: '#108ee9',
    // 选中选项卡字体颜色
    tabBarInactiveTextColor: '#333333',
    // 未选中选项卡字体颜色
    tabBarBackgroundColor: '#ffffff',
    // 选项卡背景颜色
    showPlus: false,
    swipeable: false,
    activeTab: 0,
    // 当前激活tab
    animation: true,
    tabBarCls: '',
    // tabbar的自定义样式class
    duration: 500
  },
  data: {
    windowWidth: windowWidth,
    tabWidth: 0.25,
    autoplay: false,
    animation: false,
    version: my.SDKVersion
  },
  didMount: function didMount() {
    var _this$props = this.props,
        tabs = _this$props.tabs,
        animation = _this$props.animation;
    this.setData({
      tabWidth: tabs.length > 3 ? 0.25 : 1 / tabs.length,
      animation: animation,
      autoplay: true
    });
  },
  didUpdate: function didUpdate(prevProps) {
    var tabs = this.props.tabs;

    if (prevProps.tabs.length !== tabs.length) {
      this.setData({
        tabWidth: tabs.length > 3 ? 0.25 : 1 / tabs.length
      });
    }
  },
  methods: {
    handleSwiperChange: function handleSwiperChange(e) {
      var current = e.detail.current;

      if (this.props.onChange) {
        this.props.onChange({
          index: current
        });
      }
    },
    handleTabClick: function handleTabClick(e) {
      var index = e.target.dataset.index;

      if (this.props.onTabClick) {
        this.props.onTabClick({
          index: index
        });
      }
    },
    handlePlusClick: function handlePlusClick() {
      if (this.props.onPlusClick) {
        this.props.onPlusClick();
      }
    }
  }
});