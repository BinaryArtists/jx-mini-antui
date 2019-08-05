Page({
  data: {
    namePlacehold: "dddddddd"
  },
  onLoad() {
    this.setData({
      // namePlacehold: "李杰"
    });
  },
  onConfirm () {
    console.log('on confirm');
  },
  onFocus () {
    console.log('on focus');
  },
  onBlur () {
    console.log('on blur');
  },
  onInput () {
    console.log('on input');

     this.setData({
      namePlacehold:e.detail.value,
    })
  },
  onTap() {
    this.setData({
      namePlacehold: ''
    });

    setTimeout(() => {
      this.setData({
      namePlacehold: ''
    });
    }, 0);

    console.log('namePlacehold = ', this.data.namePlacehold);
  }
});
