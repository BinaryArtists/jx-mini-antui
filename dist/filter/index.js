Component({
  mixins: [],
  data: {
    filterIndex: 0,
    showPopup: false,
    displayModeIndex: 0,
  },
  props: {
    className: '',
    fixedTopDistance: 0,
    backgroundClassName: '',
    backgroundOpacity: 1,
    filters: [
      {label: '综合', value: 'all'},
      {label: '天猫', value: 'tmall'},
    ],
    orderBys: [
      {label: '销量', value: 'sales'},
      {label: '佣金比例', value: 'commission'},
      {label: '价格', value: 'price'},
    ],
    // 排序类型
    orderTypes: [
      'none', // 无
      'asc', // 升序
      'desc' // 降序
    ],
    displayModes: [
      'grid', // 网格
      'list' // 列表
    ]
  },
  didMount: function () {
    this.orderBysToStates(this.props.orderBys)
    this.notifyInitialStates()
  },
  didUpdate: function (prevProps, prevData) {
    if (this.props.orderBys !== prevProps.orderBys) {
      this.orderBysToStates(this.props.orderBys)
      this.notifyInitialStates()
    }
  },
  didUnmount: function () {},
  methods: {
    onFilterTap: function (e) {
      if (this.props.filters.length > 1) {
        // 选项大于1个才弹出选择菜单
        this.setData({
          showPopup: !this.data.showPopup
        })
      }
    },
    onFilterItemTap: function (e) {
      var filterIndex = e.target.dataset.index
      this.setData({
        showPopup: false,
        filterIndex: filterIndex
      })
      if (this.props.onFilterChanged) {
        this.props.onFilterChanged(this.props.filters[filterIndex])
      }
    },
    onMaskTap: function () {
      this.closePopup();
    },
    closePopup: function () {
      this.setData({
        showPopup: false
      })
    },
    onOrderTap: function (e) {
      var tappedIndex = e.target.dataset.index
      var nextOrderTypeIndex = (this.data.orderByStates[tappedIndex].orderTypeIndex + 1) % this.props.orderTypes.length
      for (var index = 0; index < this.data.orderByStates.length; index++) {
        var key = 'orderByStates'+index+'.orderTypeIndex';
        var data = {};
        data[key] = index === tappedIndex ? nextOrderTypeIndex : 0;
        this.setData(data);
      }
      if (this.props.onOrderChanged) {
        this.props.onOrderChanged(this.props.orderBys[tappedIndex], this.props.orderTypes[nextOrderTypeIndex])
      }
    },
    onDisplayModeTap: function (e) {
      var displayModeIndex = (this.data.displayModeIndex + 1) % this.props.displayModes.length
      this.setData({
        displayModeIndex: displayModeIndex
      })
      if (this.props.onDisplayModeChanged) {
        this.props.onDisplayModeChanged(this.props.displayModes[displayModeIndex])
      }
    },
    orderBysToStates: function (orderBys) {
      var orderByStates = []
      orderBys.forEach(function (element) {
        orderByStates.push({
          orderBy: element,
          orderTypeIndex: 0
        })
      })
      this.setData({
        orderByStates: orderByStates
      })
    },
    // 将初始状态通知给外部
    notifyInitialStates: function () {
      if (this.props.onInitialStates) {
        var order = {}
        for (var state in this.data.orderByStates) {
          var orderType = this.props.orderTypes[state.orderTypeIndex]
          if (orderType !== 'none') {
            order = {
              orderBy: state.orderBy,
              orderType: orderType
            }
            break;
          }
        }
        this.props.onInitialStates(
          this.props.filters[this.data.filterIndex],
          order,
          this.props.displayModes[this.data.displayModeIndex])
      }
    }
  },
});
