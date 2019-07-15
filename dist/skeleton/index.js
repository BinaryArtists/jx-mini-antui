/**
 * @Hook
 * 
 *  - sk 静态
 *  - sk-anim 默认动画
 * 
 * @Child
 * 
 *  - rect
 *  - circle
 *  - layer- // 常规背景色 层次
 *  - lines
 * 
 *  - <rect, layer>-6/12/14 rpx
 */

var __enable_logging__ = false;

Component({
	props: {
		backgroundColor: '#eeeeee', // page
    layerColor: '#ffffff', // layer
    rectColor: '#ececec', // rect, circle
    lineColor: '#ededed', // line

    width: 0,
    height: 0,
    left: 0,
    top: 0,

		selector: 'sk',
		loading: ''
	},
	data: {
    // 加载效果
		loadingAni: ['spin', 'chiaroscuro', 'shine'],

    // 系统信息
		systemInfo: {},

    // 骨架信息
		rect: [null, null, null, null, null, null, null],
		circle: [null, null, null, null, null, null, null],
    layer: [null, null, null, null, null, null, null],
    line: [null, null, null, null, null, null, null]
	},
	didMount: function () {
    // 默认的首屏宽高，防止内容闪现
		var systemInfo = my.getSystemInfoSync();
		this.setData({
			systemInfo: {
				width: systemInfo.windowWidth,
				height: systemInfo.windowHeight
			},
			loading: this.data.loadingAni.includes(this.props.loading) ? this.props.loading : 'spin'
		})

		var that = this;
		// 绘制背景
    var sel = '.'+this.props.selector;

		my.createSelectorQuery()
      .selectAll(sel)
      .boundingClientRect()
      .exec(function (res) {
        __enable_logging__ && console.log(res);

        that.setData({
          'systemInfo.height': res[0].height + res[0].top
        })
		});

    this.render('layer');
		this.render('layer', 1, 6);
    this.render('layer', 2, 12);
    this.render('layer', 3, 20);

    this.render('rect');
    this.render('rect', 1, 6); // 6, 12, 20 can set by user!!!!
    this.render('rect', 2, 12);
    this.render('rect', 3, 20);

    this.render('circle');

    this.render('line');

	},
	methods: {
    render: function (field, dimen=0, radius=0) {
      var that = this;
      var sk = this.props.selector;
      var sel = '.' + sk + ' .' + sk + '-' + field;

      if (radius) {
        sel = sel + '-' + radius;
      }

      __enable_logging__ && console.log('sel = '+sel)

      my.createSelectorQuery()
        .selectAll(sel)
        .boundingClientRect()
        .exec(function(res) {

          __enable_logging__ && console.log(res)

          if (res && res.length > 0 && res[0] && res[0].length > 0) {
            var data = that.data;
            var doms = res[0];

            for (var idx in doms) {
              var dom = doms[idx];

              doms[idx] = {
                frame: dom,
                radius: radius/2
              };
            }

            data[field][dimen] = doms;

            that.setData(data)
          }
			});
    }
	}

})