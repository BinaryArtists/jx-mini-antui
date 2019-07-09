/* 

 弹窗确认组件

 使用popup实现

 应该用modal，后续打算替换掉

 参数说明：
    @params  title {String} 默认有title
    @params  btns {Array} 弹窗按钮 
    例如：[{
      type:'primary',
      text:'放弃',
      event:'cancel'
    },{
      type:'primary',
      text:'加入',
      event:'confirm'
    }]
    type:按钮样式，primary、default、disabled
    text：按钮文案
    event：按钮事件，随便定义，但是需要在onBtnClick方法中处理event

    @params  show {Boolean} 是否显示弹窗
    @params  onClose {Function} 关闭弹窗回调
    @params  onBtnClick {Function} 点击按钮回调，参数是按钮event，父元素在此方法中根据event做不同处理


 slots说明：
    default:弹窗提示内容,
 使用：
<confirmor show="{{showConfirmPopup}}" title="提示" btns="{{confirmBtns}}" onBtnClick="onBtnClick" onClose="onCloseConfirmPopup">
    <view class="my-modal-content">确认踢出“<text class="red-font">{{member}}</text>”吗？</view>
    <view class="my-modal-content"><text class="red-font">{{amount}}元</text>报名费会被退回</view>
</confirmor>

*/

Component({
  props: {
    className: '',
    show: false,
    position: 'center',
    mask: true,
    animation: true,
    disableScroll: true,
    zIndex: 10,


    title: '',
    btns: [],
    showConfirmPopup: false,
    onBtnClick: data => console.log(data),
  },
  methods: {
    onMaskTap: function onMaskTap() {
      var onMaskTap = this.props.onMaskTap;
      if (onMaskTap) {
        onMaskTap();
      }

      var onClose = this.props.onClose;
      if (onClose) {
        onClose();
      }
    },
    onBtnTap(e){
      const {onBtnClick} = this.props;
      if (onBtnClick) {
        onBtnClick(e.target.dataset.event, e.target.dataset.param);
      }
    },
    onCloseTap() {
      var onClose = this.props.onClose;
      if (onClose) {
        onClose();
      }
    }
  }
});
