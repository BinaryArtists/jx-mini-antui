/**
 * Skeleton Screen 骨架屏
 * 
 * H5 方案
 * 
 * 1. 完全靠手写HTML和CSS方式给每个页面定制一套骨架屏
 * 2. 利用预渲染的方式生成静态骨架屏
 * 2.1 饿了么：puppeteer，https://github.com/ElemeFE/page-skeleton-webpack-plugin
 */
Page({
  data: {
		motto: 'Hello World',
		userInfo: {
			avatarUrl: 'https://sfault-image.b0.upaiyun.com/117/579/1175792133-5b63fce811636_articlex',
			nickName: 'jayzou'
		},
		lists: [
			'aslkdnoakjbsnfkajbfk',
			'qwrwfhbfdvndgndghndeghsdfh',
			'qweqwtefhfhgmjfgjdfghaefdhsdfgdfh',
      'qweqwtefhfhgmjfgjdfefdhsdfgdfh',
      'qweqwtefhfhgmjfgjdfghaefdhh',
      'qweqwtefhfhgmjfgjdfghaefdhsddsfaewafsfasah',
      'qweqwtefhfhgmjf',
      'qweqwtefhfhgmjfgjdfghaefdhsdfgdfh',
      'qweqwtefhfhgmjdfgdfh',
      'qw',
		],
		showSkeleton: true
	},
	onLoad: function () {
		const that = this;
		setTimeout(() => {
			that.setData({
				// showSkeleton: false
			})
		}, 4000)
	}
});
