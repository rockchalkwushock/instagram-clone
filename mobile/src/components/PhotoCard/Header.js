import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { makeCircle } from '../../utils/themes'
import { fakeAvatar } from '../../utils/constants'

const styles = StyleSheet.create({
  root: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 16
  },
  userMetaWrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  btnWrapper: {
    flex: 0.1,
    backgroundColor: 'yellow'
  },
  avatarWrapper: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarImage: {
    ...makeCircle(45)
  },
  userInfoWrapper: {
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 10
  },
  username: {},
  location: {}
})

export default function Header() {
  return (
    <View style={styles.root}>
      <View style={styles.userMetaWrapper}>
        <View style={styles.avatarWrapper}>
          <Image source={{ uri: fakeAvatar }} style={styles.avatarImage} />
        </View>
        <View style={styles.userInfoWrapper}>
          <Text style={styles.username}>Cody Brunner</Text>
          <Text style={styles.location}>Wichita, Kansas</Text>
        </View>
      </View>
      <View style={styles.btnWrapper} />
    </View>
  )
}
