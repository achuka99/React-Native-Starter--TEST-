import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SparklesIcon } from "react-native-heroicons/solid";

const YouTubeScreen = () => {
  return (
    <View className='pt-12'>
        
      <Text>YouTubeScreen</Text>
      {/* <SparklesIcon /> */}

      <StatusBar style="auto" />
    </View>
  )
}

export default YouTubeScreen