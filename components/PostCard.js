import { Dimensions, View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Carousel from 'react-native-reanimated-carousel';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';



const PostCard = ({ item }) => {
  const navigation = useNavigation();
  

  const [opacity, setOpacity] = useState(1);

  const width = Dimensions.get('window').width;

  
  return (
    <View className='pt-5' key={item.id}>
      
      <Pressable onPress={() => navigation.push('Details', {  item })}>
      <SharedElement id={item.id} >
      <Image  source={{ uri : item.photoUrl}} 
      
            style={{
                  // width: width-32,
                  // height: 150,
                  aspectRatio: 3 / 2,
                  resizeMode: 'cover',
              }} 
            className=' items-center  justify-center rounded-lg'
      />
      </SharedElement>
      </Pressable>


      {/* <View className='items-center justify-center rounded-lg pt-2'>
                      
                              <Carousel
                              className='rounded-md'
                              loop
                              width={329}
                              height={width / 2}
                              autoPlay={false}
                              data={imageList}
                              scrollAnimationDuration={1000}
                              //onSnapToItem={(index) => console.log('current index:', index)}
                              renderItem={({ item }) => (
                                  <View
                                  className='flex-1 items-center justify-center '
                                  >
                                      <Image  source={{ uri : item }} 
                                            style={{
                                                width: '100%',
                                                //height: '100%',
                                                aspectRatio: 3 / 2,
                                                resizeMode: 'cover',
                                            }} 
                                //className=' items-center justify-center rounded-3xl'
                          />
                                  </View>
                              )}
                          />
                    </View>
     */}

          
        <View className='flex-row items-center justify-between py-2'>
        <Text className='text-black'>{item.location}</Text>
        <View className='flex-row items-center justify-between'>
        <AntDesign name='star' size={18} />
         <Text className='ml-1'>{item.rating}</Text>
        </View>
        
        </View>
      
      <Text className='text-gray-500 text-md'>{item.description}</Text>
      <Text className=''>
      <Text className='text-gray-700 text-lg' >{item.price}</Text>
      </Text>


                    

      
    </View>
  )
}

export default PostCard

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
  },
  icon: {
    marginRight: 8,
  },
  chips: {
    flexDirection: "row",
  },
  chip: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    marginRight: 8,
  },
  label: {
    
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    marginTop: 16,
  },
});