/**
 * 使用说明
 * 
 * 依赖组件：modal
 * 依赖样式：btn-minor size-md
 * 
 * 入参
 * 
 * btnHandlers
 * 
 * [ {type: 'minor', title: '', event: '' } ] minor, primary
 * 
 * 
 */

Component({
  mixins: [],
  data: {
    show: false,
    showClose: false
  },
  props: {
    show: false,
  
    title:'提示',
    buttons:[ { type: 'minor', title: '确定', event: 'confirmed' } ],

    onButtonClicked: null,
    data: 'null'
  },

  didUnmount: function() {},

  didMount: function() {
    this.setData({
      show: this.props.show
    })
  },

  didUpdate: function (prevProps, prevData) {
    if (prevProps.show === !this.props.show) {
      this.setData({
        show: this.props.show
      })
    }
  },

  methods: {
    onClose: function (e) {
    },
    onClick: function (e) {
    },
    onBtnClicked: function (e) {
      var onButtonClicked = this.props.onButtonClicked;

      onButtonClicked && onButtonClicked(e.target.dataset, this.props.data)
    }
  }
});
