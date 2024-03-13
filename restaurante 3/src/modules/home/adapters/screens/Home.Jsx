import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {icon} from '@rneui/base'

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Text>
        <Icon 
        type='font-awesome'
        name='instagram'
        color='pink'
        size={22}
        />
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})