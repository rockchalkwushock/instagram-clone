import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { PhotoCard } from '../../components'

class FeedsScreen extends Component {
  state = {}
  render() {
    return (
      <View>
        <Text>FeedsScreen</Text>
        <PhotoCard />
      </View>
    )
  }
}

export default FeedsScreen
