Page({
  data: {
    namePlacehold: ""
  },
  onLoad() {
    this.setData({
      namePlacehold: "李杰"
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
  },
  onTap() {
    this.setData({
      namePlacehold: ""
    });

    console.log('namePlacehold = ', this.data.namePlacehold);
  }
});
