var __enable_logging__ = false;

Component({
  mixins: [],
  // 入参
  props: {
    className: '',
    disableScroll: true,

    titleItems: [],
    contentItems: [],

    onChange: function (itemSetting) {},
  },
  // 视图模型
  data: {
    // 样式控制
    titleIdx: -1,
    titleSelectItems: [null, null, null, null, null, null, null, null, null, null, null, null, null],

    showMask: false,

    optionsOpen: false,
    optionsShow: false,

    itemSetting: {},
  },
  didMount: function () {
    __enable_logging__ && console.log('<filters> params did mount');

    this.setData({
      titleItems: this.props.titleItems,
      contentItems: this.props.contentItems
    })
  },
  /**
   * @调用逻辑
   * 
   * 组件内部调用 this.setData 会触发
   * 外部调用者调用 this.setData 也会触发
   * 
   * 默认 items 数量变化才会触发 实际的数据刷新
   */
  didUpdate: function (prevProps, prevData) {
    if (prevProps.titleItems != this.props.titleItems ||
      prevProps.contentItems != this.props.contentItems ||
      prevProps.titleItems.length != this.props.titleItems.length ||
      prevProps.contentItems.length != this.props.contentItems.length) {
        __enable_logging__ && console.log('<filters> params did updated');

        this.setData({
          titleItems: this.props.titleItems,
          contentItems: this.props.contentItems
        })
    }
    
  },
  didUnmount: function () {},
  methods: {
    //////////////////////////////////////////////////////
    // 菜单选择
    //////////////////////////////////////////////////////

    onTitleItem: function (e) {
      var titleSelectIdx = e.currentTarget.dataset.nav;

      __enable_logging__ && console.log('selec idx = '+titleSelectIdx)

      this.initSelectSetting(titleSelectIdx);

      this.renderSelectList(titleSelectIdx);
    },

    initSelectSetting: function (idx) {
      if (idx < 0) return;

      var itemSetting = this.data.contentItems[idx];
      var type = itemSetting.type;

      if (type === 'price') {
        itemSetting.selected[0] = itemSetting.default[0];
        itemSetting.selected[1] = itemSetting.default[1];
      }
    },

    renderSelectList: function (idx) {
      var itemSetting = this.data.contentItems[idx];
      // var type = itemSetting.type;

      __enable_logging__ && console.log('render items = '+JSON.stringify(itemSetting.items))

      if (idx == this.data.titleIdx) {
        // 收起
        this.setData({
          titleIdx: -1,

          itemSetting: itemSetting,

          optionsShow: false,
          showMask: false,
        })
      } else {
        // 展开
        this.setData({
          titleIdx: idx,

          itemSetting: itemSetting,

          optionsShow: true,
          showMask: true,
        })
      }
    },

    onMaskTap: function (e) {
      var titleSelectItems = this.data.titleSelectItems;

      this.setData({
        titleIdx: -1,
titleSelectItems: titleSelectItems,
        optionsShow: false,
        showMask: false
      })
    },

    //////////////////////////////////////////////////////
    // 一维条目选择
    //////////////////////////////////////////////////////
    onSingleSelectItem: function (e) {
      var itemSelectIdx = e.currentTarget.dataset.idx;

      // 存放
      var itemSetting = this.data.itemSetting;

      itemSetting.selected = itemSetting.items[itemSelectIdx];

      // 更新筛选菜单 title
      var titleSelectItems = this.data.titleSelectItems;

      titleSelectItems[this.data.titleIdx] = itemSetting.selected;

      // this.setData({
        
      // });

      __enable_logging__ && console.log('itemSetting = '+JSON.stringify(itemSetting))

      this.onMaskTap();

      this.onNotify();
    },

    //////////////////////////////////////////////////////
    // 三维条目选择
    //////////////////////////////////////////////////////

    onTripleSelectLeft: function (e) {
      var item = e.target.dataset.item;

      __enable_logging__ && console.log('[三维] 左边选择 = ' + item);

      var itemSetting = this.data.itemSetting;

      itemSetting.selected[0] = item;
      itemSetting.selected[1] = ''; // 清理第二级选择

      this.setData({
        itemSetting: itemSetting
      });

      __enable_logging__ && console.log('[三维] 左边 - 次级选项 = ' + itemSetting.items[1][itemSetting.selected[0]])
    },

    onTripleSelectCenter: function (e) {
      var item = e.target.dataset.item;

      __enable_logging__ && console.log('[三维] 中间选择 = ' + item);

      var itemSetting = this.data.itemSetting;

      itemSetting.selected[1] = item;
      itemSetting.selected[2] = ''; // 清理第三级选择

      this.setData({
        itemSetting: itemSetting
      });
    },

    onTripleSelectRight: function (e) {
      var item = e.target.dataset.item;

      __enable_logging__ && console.log('[三维] 右边选择 = ' + item);

      var itemSetting = this.data.itemSetting;

      itemSetting.selected[2] = item;

      // 更新筛选菜单 title
      var titleSelectItems = this.data.titleSelectItems;

      titleSelectItems[this.data.titleIdx] = item;

      this.setData({
        titleSelectItems: titleSelectItems,
        itemSetting: itemSetting
      });
    },

    onTripleSelectReset: function () {
      var itemSetting = this.data.itemSetting;

      itemSetting.selected = ['', '', ''];

      this.setData({
        itemSetting: itemSetting
      });
    },

    onTripleSelectSubmit: function () {
      var itemSetting = this.data.itemSetting;

      __enable_logging__ && console.log('选择的三级选项是：' + itemSetting.selected);

      // 隐藏地铁区域下拉框
      this.setData({
        titleIdx: -1,

        optionsShow: false,
        showMask: false,
      });

      this.onNotify();
    },

    //////////////////////////////////////////////////////
    // 价格区间选择
    //////////////////////////////////////////////////////

    onPriceMinChange: function (e) {
      __enable_logging__ && console.log('左值为：' + e.detail.value);

      var currentValue = parseInt(e.detail.value);
      var itemSetting = this.data.itemSetting;

      itemSetting.selected[0] = currentValue;

      this.setData({
        itemSetting: itemSetting
      });
    },
    onPriceMaxChange: function (e) {
      __enable_logging__ && console.log('右值为：' + e.detail.value);

      var currentValue = parseInt(e.detail.value);
      var itemSetting = this.data.itemSetting;

      itemSetting.selected[1] = currentValue;

      this.setData({
        itemSetting: itemSetting
      });
    },
    
    onPriceSelectReset: function () {
      this.initSelectSetting(this.data.titleIdx);

      this.setData({
        itemSetting: itemSetting
      });
    },
  
    onPriceSelectCommit: function () {
      this.onMaskTap();

      this.onNotify();
    },

    //////////////////////////////////////////////////////
    // 回调通知
    //////////////////////////////////////////////////////

    onNotify: function () {
      var results = this.data.contentItems.map(function (is) { // item setting

        return is.selected;
      });

      __enable_logging__ && console.log('results = '+JSON.stringify(results));

      // 通知
      var onChange = this.props.onChange;
      onChange && onChange(results);
    }
  },
});
