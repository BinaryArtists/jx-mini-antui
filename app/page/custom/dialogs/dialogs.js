Page({
  data: {
    delDialog: {
      show: false,
      title: '标题',
      buttons: [
        { type: 'minor', title: '确定', event: 'confirmed' }
      ],
      
      // 穿透数据
      data: '穿透数据',

      // 页面数据
      username: ''
    }
  },
  onLoad() {},
  onTap () {
    this.setData({
      'delDialog.show': true
    });
  },

  onDelConfirmed (dataset, data) {
    console.log(dataset, data);

    const { idx, event } = dataset; 

    this.setData({
      'delDialog.show': false
    });
  },
});
