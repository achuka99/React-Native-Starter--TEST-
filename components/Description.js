import { View, Text } from 'react-native'
import React from 'react'


const Description = () => {
  return (
    <View className='flex-1 bg-white mx-3'>
         <View className='flex-row items-center justify-between py-2'>
        <Text className='text-black'>Kampala, Uganda</Text>
        <View className='flex-row items-center justify-between'>
        
         <Text className='ml-1'>5.0</Text>
        </View>
        
        </View>
      
      <Text className='text-gray-500 text-md'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <Text className=''>
        <Text className='text-gray-700 text-lg' >$30 night</Text>
      </Text>
      <Text className='text-gray-700 text-2xl'>Hosted by Achuka Simon</Text>

      
      
    </View>
  )
}

export default Description