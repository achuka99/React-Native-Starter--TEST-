import { View, Text, Image } from 'react-native'
import React from 'react'
import { SharedElement } from 'react-navigation-shared-element';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Description from '../components/Description';

const DetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  
  return (

    
    <View className='flex-1'>
            <SharedElement id={item.id}>
            <Image source={{ uri: item.photoUrl}} 
                style={{
                    width: '100%',
                    //height: '100%',
                    aspectRatio: 3 / 2,
                    resizeMode: 'cover',
                }} 
            className=''
            />
            <View className='absolute top-8 left-3 '>
            <Entypo name='cross' size={30} onPress={() => navigation.goBack()}/>
            </View>
            
            </SharedElement>
            <Description />

        
   </View>
   

    
  
  )
}



export default DetailsScreen