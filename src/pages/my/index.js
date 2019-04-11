import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.scss'

@connect(({ counter }) => ({
  counter
}))
class Index extends Component {
  config = {
    navigationBarTitleText: '我的'
  }

  componentDidMount() {
    console.log('my componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {
    console.log('my componentDidShow')
  }

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <View>
          <Text>Hello, taro</Text>
        </View>
      </View>
    )
  }
}

export default Index
