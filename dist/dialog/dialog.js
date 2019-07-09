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

    onButtonClicked:data => console.log(data),
    data: 'null'
  },

  didUnmount() {},

  didMount() {
    this.setData({
      show: this.props.show
    })
  },

  didUpdate (prevProps, prevData) {
    if (prevProps.show === !this.props.show) {
      this.setData({
        show: this.props.show
      })
    }
  },

  methods: {
    onClose (e) {
    },
    onClick (e) {
    },
    onBtnClicked (e) {
      let { onButtonClicked } = this.props

      onButtonClicked && onButtonClicked(e.target.dataset, this.props.data)
    }
  }
});
