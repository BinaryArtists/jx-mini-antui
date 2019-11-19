Page({
  data: {

    filterTitles: ['全部分类', '比赛日期', '地区', '价格区间'],
    filterItems: [
      {
        type: 'single',
        items: ['全部分类', '选项一', '选项二', '选项三', '选项四'],
        keypath: null, // 如果keypath有效，则会对items中的对象进行萃取
        selected: '选项一'
      }, 
      {
        type: 'single',
        items: [{
          name: '比赛日期',
          key: 0
        },{
          name: '选项一',
          key: 1
        }, {
          name: '选项二',
          key: 2
        }, {
          name: '选项三',
          key: 3
        }, {
          name: '选项四',
          key: 4
        }],
        keypath: 'name', // 如果keypath有效，则会对items中的对象进行萃取
        selected: {
          name: '选项一',
          key: 1
        }
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
        keypath: null, // 如果keypath有效，则会对items中的对象进行萃取
        selected: null
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
        selected: null
      }
    ],

    marginItems: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],

    items: [
      {
        title: '单行列表',
        extra: '详细信息',
      },
    ],
    items2: [
      {
        title: '多行列表',
        arrow: true,
      },
      {
        title: '多行列表',
        arrow: 'up',
      },
      {
        title: '多行列表',
        arrow: 'down',
      },
      {
        title: '多行列表',
        arrow: 'empty',
      },
      {
        title: '多行列表',
      },
    ],
    items3: [
      {
        title: '双行列表',
        brief: '描述信息',
        arrow: true,
      },
    ],
    items4: [
      {
        title: '双行列表',
        brief: '描述信息',
        arrow: true,
      },
      {
        title: '双行列表',
        brief: '描述信息',
        arrow: true,
      },
      {
        title: '双行列表',
        brief: '描述信息',
        arrow: true,
      },
    ],
    itemsThumb: [
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
        extra: '描述文字',
        arrow: true,
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
        arrow: true,
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
        arrow: true,
      },
    ],
    itemsThumbMultiple: [
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
        brief: '描述信息',
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
      },
      {
        thumb: 'https://tfsimg.alipay.com/images/partner/T12rhxXkxcXXXXXXXX',
        title: '标题文字',
      },
    ],
    items5: [
      {
        thumb: 'https://gw.alipayobjects.com/zos/rmsportal/KXDIRejMrRdKlSEcLseB.png',
        title: '固定到头部',
        brief: '描述信息',
        arrow: true,
        sticky: true,
      },
      {
        title: '标题文字不换行很长很长很长很长很长很长很长很长很长很长',
        arrow: true,
        align: 'middle',
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: true,
        align: 'top',
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
        align: 'bottom',
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        align: 'top',
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: true,
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        align: 'top',
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: true,
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        align: 'top',
      },
      {
        title: '标题文字换行很长很长很长很长很长很长很长很长很长很长',
        arrow: true,
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '没有箭头',
      },
      {
        title: '标题文字很长很长很长很长很长很长很长很长很长很长很长很长很长很长',
        extra: '子元素垂直对齐',
        align: 'middle',
      },
    ],


    /// 列表
    disableScroll: false,
    scrollRectTop: 0
  },
  onLoad() {

  },
  onReady () {
  },

  onItemClick(ev) {
    my.alert({
      content: `点击了第${ev.index}行`,
    });
  },
  onScrollToLower() {
    // const { items5 } = this.data;
    // const newItems = items5.concat(newitems);
    // console.log(newItems.length);
    // this.setData({
    //   items5: newItems,
    // });
  },
  onFilterFocus () {
    // this.setData({
    //   disableScroll: true
    // })

    var self = this;

    my.createSelectorQuery()
      .select('.filters-wrapper').boundingClientRect().exec((ret) => {
      console.log(ret);

      var filtersBarFrame = ret[0];
      var scrollRectTop = filtersBarFrame.bottom;

      self.setData({
        scrollRectTop,
        disableScroll: true
      })
    });
  },
  onFilterBlur () {
    this.setData({
      disableScroll: false,
      scrollRectTop: 0
    })
  },
  onFilterChange (item) {
    console.log('filters changed item = ', item);
  },

  // Search 

  onSearchInput () {},
  onSearchConfirm () {},
  onSearchClear () {}
});
