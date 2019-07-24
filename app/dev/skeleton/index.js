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
 *  - line
 * 
 *  - <rect, layer>-6/12/14 rpx
 * 
 *  - skies 自定义 use px
 *    { type: 'rect/circle/layer/line', frame: { width: 0, heihgt: 0, top: 0, left: 0 } , radius: 0 }
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
		loading: '',

    skies: [],

    imgSrc: ''
	},
	data: {
    useCssSelector: true, // 实现方式：css、图片

    // 加载效果
		loadingAni: ['spin', 'chiaroscuro', 'shine'],

    // 骨架信息
		rect: [[], [], [], [], [], [], []],
		circle: [[], [], [], [], [], [], []],
    layer: [[], [], [], [], [], [], []],
    line: [[], [], [], [], [], [], []]
	},
	didMount: function () {
    // 默认的首屏宽高，防止内容闪现
		this.setData({
			rect: [[], [], [], [], [], [], []],
      circle: [[], [], [], [], [], [], []],
      layer: [[], [], [], [], [], [], []],
      line: [[], [], [], [], [], [], []],
			loading: this.props.loading
    })
    
    if (!my.canIUse('createSelectorQuery')) {
      this.setData({useCssSelector:false});

      return;
    }

    this.parse(this.props.skies);

    this.render('layer', 0, 0);
		this.render('layer', 1, 6);
    this.render('layer', 2, 12);
    this.render('layer', 3, 20);

    this.render('rect', 0, 0);
    this.render('rect', 1, 6); // 6, 12, 20 can set by user!!!!
    this.render('rect', 2, 12);
    this.render('rect', 3, 20);

    this.render('circle', 0, 0);

    this.render('line', 0, 0);

	},
	methods: {
    parse: function (skies) {
      for ( var idx in skies) {
        var sky = skies[idx];
        __enable_logging__ && console.log(sky)

        if (sky && sky.type) {
          var dimen = 0;
          var field = sky.type;
          var data = this.data;

          if (sky.radius == 6) dimen = 1;
          if (sky.radius == 12) dimen = 2;
          if (sky.radius == 20) dimen = 3;

          data[field][dimen].push(sky);

          __enable_logging__ && console.log(data[field])
        }
      }
    },
    render: function (field, dimen, radius) {
      var that = this;
      var sk = this.props.selector;
      var sel = '.' + sk + ' .' + sk + '-' + field;

      if (radius) {
        sel = sel + '-' + radius;
      }

      
        

      my.createSelectorQuery()
        .selectAll(sel)
        .boundingClientRect()
        .exec(function(res) {

          __enable_logging__ && console.log('sel = '+sel)
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

            data[field][dimen] = data[field][dimen].concat(doms);

            that.setData(data)
          }
      });
    }
	}

})