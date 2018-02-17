import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from './Header'

const styles = StyleSheet.create({
  root: {
    minHeight: 800,
    backgroundColor: 'red',
    paddingBottom: 10
  }
})

class PhotoCard extends Component {
  state = {}
  render() {
    return (
      <View style={styles.root}>
        <Header />
        <Text>Hello</Text>
      </View>
    )
  }
}

export default PhotoCard
