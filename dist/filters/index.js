Component({
  mixins: [],
  // 入参
  props: {
    titleItems: [],
    contentItems: [],
    title:'提示',
    buttons:[ { type: 'minor', title: '确定', event: 'confirmed' } ],

    onChange: function (itemSetting) {},
  },
  // 视图模型
  data: {
    // 样式控制
    titleIdx: -1,

    showMask: false,

    optionsOpen: false,
    optionsShow: false,

    itemSetting: {},

    priceRangeItems: [], // 价格区间设定值
    priceRangeLimitationItems: [], // 价格区间限制

    // content 内容区域 数据

    titleItems: ['全部分类', '比赛日期', '地区', '价格区间'],
    contentItems: [
      {
        type: 'single',
        items: ['选项一', '选项二', '选项三', '选项四'],
        selected: ''
      }, 
      {
        type: 'double',
        items: [['选项一', '选项二', '选项三', '选项四'], ['选项一', '选项二', '选项三', '选项四']],
        selected: ['', '']
      }, 
      {
        type: 'triple',
        items: [
          ['选项一', '选项二', '选项三', '选项四'], 
          {
            '选项一': ['选项一', '选项二', '选项三', '选项四', '选项五'], 
            '选项二': ['选项一', '选项二', '选项三', '选项四'], 
            '选项三': ['选项一', '选项二', '选项三', '选项四'], 
            '选项四': ['选项一', '选项二', '选项三', '选项四']
          }, 
          {
            '选项一': ['选项一', '选项二', '选项三', '选项四'], 
            '选项二': ['选项二', '选项三', '选项四'], 
            '选项三': ['选项一', '选项三', '选项四'], 
            '选项四': ['选项一', '选项二', '选项三', '选项四'],
            '选项五': ['选项一', '选项二', '选项三']
          }],
        selected: ['', '', '']
      }, 
      {
        type: 'price',
        items: [
          { // min
            min: 0,
            max: 10000
          }, { // max
            min: 0,
            max: 10000
          }
        ],
        default: [1000, 6000],
        selected: ['', '']
      }
    ],
  },
  didMount: function () {
    this.setData({
      titleItems: this.props.titleItems,
      contentItems: this.props.contentItems
    })
  },
  didUpdate: function () {},
  didUnmount: function () {},
  methods: {
    //////////////////////////////////////////////////////
    // 菜单选择
    //////////////////////////////////////////////////////

    onTitleItem: function (e) {
      var titleSelectIdx = e.currentTarget.dataset.nav;

      console.log('selec idx = '+titleSelectIdx)

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
      var type = itemSetting.type;

      console.log('render items = '+JSON.stringify(itemSetting.items))

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
      this.setData({
        titleIdx: -1,

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

      console.log('itemSetting = '+JSON.stringify(itemSetting))

      this.onMaskTap();
    },


    //////////////////////////////////////////////////////
    // 三维条目选择
    //////////////////////////////////////////////////////

    onTripleSelectLeft: function (e) {
      var item = e.target.dataset.item;

      console.log('[三维] 左边选择 = ' + item);

      var itemSetting = this.data.itemSetting;

      itemSetting.selected[0] = item;
      itemSetting.selected[1] = ''; // 清理第二级选择

      this.setData({
        itemSetting: itemSetting
      });

      console.log('[三维] 左边 - 次级选项 = ' + itemSetting.items[1][itemSetting.selected[0]])
    },

    onTripleSelectCenter: function (e) {
      var item = e.target.dataset.item;

      console.log('[三维] 中间选择 = ' + item);

      var itemSetting = this.data.itemSetting;

      itemSetting.selected[1] = item;
      itemSetting.selected[2] = ''; // 清理第三级选择

      this.setData({
        itemSetting: itemSetting
      });
    },

    onTripleSelectRight: function (e) {
      var item = e.target.dataset.item;

      console.log('[三维] 右边选择 = ' + item);

      var itemSetting = this.data.itemSetting;

      itemSetting.selected[2] = item;

      this.setData({
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

      console.log('选择的三级选项是：' + itemSetting.selected);

      // 隐藏地铁区域下拉框
      this.setData({
        titleIdx: -1,

        optionsShow: false,
        showMask: false,
      })
    },

    //////////////////////////////////////////////////////
    // 价格区间选择
    //////////////////////////////////////////////////////

    onPriceMinChange: function (e) {
      console.log('左值为：' + e.detail.value);

      let currentValue = parseInt(e.detail.value);
      // let currentPer = parseInt(currentValue)

      var itemSetting = this.data.itemSetting;

      itemSetting.selected[0] = currentValue;

      this.setData({
        itemSetting: itemSetting
      });
    },
    onPriceMaxChange: function (e) {
      console.log('右值为：' + e.detail.value);

      let currentValue = parseInt(e.detail.value);
      
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
      this.setData({
        optionsShow: true,
        showMask: false,
        titleIdx: -1
      })
    }
  },
});
