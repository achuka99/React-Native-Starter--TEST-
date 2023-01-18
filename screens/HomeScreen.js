import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Fontisto from 'react-native-vector-icons/Fontisto'


const HomeScreen = () => {
  return (
    <View className='flex-1'>
      
    <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1595521624992-48a59aef95e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhdXRpZnVsJTIwcGxhY2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'}}
        className='flex-1 justify-center'
        resizeMode="cover"
    >
        <Pressable  className='absolute bg-white ml-5  p-3 h-11 px-5 w-80 rounded-full flex-row items-center justify-between mr-3 z-20 top-16' onPress={() => console.warn('New home')}>        
            <Text className='text-gray-500 font-bold '>Where are you going?</Text>
            <Fontisto name='search' size={18} color='gray' />
        </Pressable>

        <Text className='text-white text-8xl font-bold ml-3'>Go Near </Text>
        <Pressable  className='bg-white ml-3 p-2 h-12 w-40 rounded-md mr-20 mt-10 items-center justify-center' onPress={() => console.warn('New home')}>
            <Text className='text-gray-500 font-bold '>Explore Nearby stays</Text>
        </Pressable>
    </ImageBackground>
      <StatusBar style="light" />
    </View>
  )
}

export default HomeScreen