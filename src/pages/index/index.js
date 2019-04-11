import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Com1 from '../../components/Com1/Com1'
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'

@connect(
  ({ counter }) => ({
    counter
  }),
  dispatch => ({
    add() {
      dispatch(add())
    },
    dec() {
      dispatch(minus())
    },
    asyncAdd() {
      dispatch(asyncAdd())
    }
  })
)
class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  componentWillMount() {
    console.log('index componentWillMount')
    // console.log('Taro.getSystemInfoSync()', Taro.getSystemInfoSync())
  }

  componentDidMount() {
    // console.log(Taro.onAppShow)
    // Taro.onAppShow(res => console.log('res', res))
    // Taro.getSystemInfo().then(res => console.log(res))
    // Taro.makePhoneCall({ phoneNumber: '1340000' })
    // console.log(Taro.canIUse('openBluetoothAdapter'))
    // Taro.showActionSheet({
    //   itemList: ['one', 'two']
    // }).then(res => console.log(res))
    // Taro.showNavigationBarLoading()
    // Taro.openSetting().then(res => console.log(res))
    // Taro.getUserInfo().then(res => console.log(res))
    // console.log('this.$router.params', this.$router.params)
    console.log('index componentDidMount')
    console.log('this.$componentType', this.$componentType)
    // console.log('Taro.getCurrentPages()', Taro.getCurrentPages())
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
    console.log('index componentWillUnmount')
  }

  componentDidShow() {
    console.log('index componentDidShow')
  }

  componentDidHide() {
    console.log('index componentDidHide')
  }

  onPullDownRefresh() {
    console.log('onPullDownRefresh', 'onPullDownRefresh')
  }

  goNews = () => {
    Taro.navigateTo({
      url: '/pages/news/news?id=2&type=test'
    })
  }

  render() {
    const isLoggedIn = false
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.props.add}>
          +
        </Button>
        <Button className='dec_btn' onClick={this.props.dec}>
          -
        </Button>
        <Button onClick={this.goNews}>news</Button>
        <View>
          <Text>{this.props.counter.num}</Text>
        </View>
        <View>
          <Text>Hello, taro index</Text>
        </View>
        <Com1 />
        <Text>{(isLoggedIn && '已登录') || '未登录'}</Text>
      </View>
    )
  }
}

export default Index
