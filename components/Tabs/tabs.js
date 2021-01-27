// components/Tabs/tabs.wxml.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabsList:{
      type:Array,
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeCurrent(e) {
      // console.log(e.currentTarget.dataset.index);
      let targetIndex = e.currentTarget.dataset.index;
      if (this.data.current === targetIndex) return false;
      else this.setData({
        current: targetIndex
      })
      console.log(this.data.current)
    }
  }
})
