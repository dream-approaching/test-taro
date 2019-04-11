import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.scss'

@connect(({ counter }) => ({
  counter
}))
class Index extends Component {
  config = {
    navigationBarTitleText: '新闻'
  }

  componentDidMount() {
    console.log('news componentDidMount')
    console.log('this.$componentType', this.$componentType)
    console.log('this.$router.params', this.$router.params)
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
    console.log('news componentWillUnmount')
  }

  componentDidShow() {
    console.log('news componentDidShow')
  }

  componentDidHide() {
    console.log('news componentDidHide')
  }

  goBack = () => {
    Taro.navigateBack({
      delta: 1
    })
  }

  render() {
    return (
      <View className='index'>
        <View>
          <Button onClick={this.goBack}>back</Button>
        </View>
      </View>
    )
  }
}

export default Index
