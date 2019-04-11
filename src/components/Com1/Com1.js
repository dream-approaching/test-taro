import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

/* CustomComp.js */
export default class CustomComp extends Component {
  static options = {
    addGlobalClass: true
  }

  render() {
    return <View className='red-text'>这段文本的颜色由组件外的 class 决定</View>
  }
}
