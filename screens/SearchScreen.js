import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import PostCard from '../components/PostCard'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { FlashList } from '@shopify/flash-list'

const Chip = ({ label }) => (
  <View style={styles.chip}>
    <Text style={styles.label}>{label}</Text>
  </View>
);

const DATA = [
  {
    id: 1,
    photoUrl: 'https://media.istockphoto.com/photos/side-view-of-modern-living-room-with-tv-set-sofa-armchair-and-balcony-picture-id1352799468?b=1&k=20&m=1352799468&s=170667a&w=0&h=VJULdpl7avFgelx31XmkEe3wpnWzrppZU0cX8HcQfnk=',
    location: 'Kampala, Uganda',
    description: 'Home1',
    rating: 3,
    price: 450,
  },
  {
    id: 2,
    photoUrl: 'https://media.istockphoto.com/photos/digital-rendering-of-a-luxury-hotel-suite-picture-id1334117383?b=1&k=20&m=1334117383&s=170667a&w=0&h=zE_eZWVRhFnR1X7uEADN0BPAxXcmyktK9v6KyareR8k=',
    location: 'Nairobi, Kenya',
    description: 'Home2',
    rating: 4,
    price: 342,
  },
  {
    id: 3,
    photoUrl: 'https://media.istockphoto.com/photos/modern-living-room-interior-3d-render-picture-id1293762741?b=1&k=20&m=1293762741&s=170667a&w=0&h=2RI8SmBN4MrEZuTvdwRzaeB887x-dukFcQBpyQ-qwS4=',
    location: 'Arusha, Tanzania',
    description: 'Home3',
    rating: 4.5,
    price: 210,
  },
  {
    id: 4,
    photoUrl: 'https://images.unsplash.com/photo-1613282556715-9b33416983de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJlbnRhbCUyMHJvb21zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    location: 'Jinja',
    description: 'home4',
    rating: 4.5,
    price: 210,
  },
  {
    id: 5,
    photoUrl: 'https://media.istockphoto.com/photos/interior-of-small-apartment-living-room-for-home-office-picture-id1398814566?b=1&k=20&m=1398814566&s=170667a&w=0&h=IufMIz0HK7qIJb0y1D_dbLCD0kVxEue_BldHGaq7DYM=',
    location: 'Masaka',
    description: 'home5',
    rating: 4.5,
    price: 210,
  },
  {
    id: 6,
    photoUrl: 'https://plus.unsplash.com/premium_photo-1661963201626-2c69cfbe4f8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlbnRhbCUyMHJvb21zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    location: 'Gulu',
    description: 'home6',
    rating: 4.5,
    price: 210,
  },
  {
    id: 7,
    photoUrl: 'https://images.unsplash.com/photo-1522444195799-478538b28823?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlbnRhbCUyMHJvb21zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    location: 'Mproto',
    description: 'home7',
    rating: 4.5,
    price: 210,
  },
  {
    id: 8,
    photoUrl: 'https://images.unsplash.com/photo-1650137953679-0fe3b3985aac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHJlbnRhbCUyMHJvb21zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    location: 'Mukono',
    description: 'home8',
    rating: 4.5,
    price: 210,
  },
  {
    id: 9,
    photoUrl: 'https://images.unsplash.com/photo-1650138318699-a7916aced967?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHJlbnRhbCUyMHJvb21zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    location: 'Tororo',
    description: 'home9',
    rating: 4.5,
    price: 210,
  },
  {
    id: 10,
    photoUrl: 'https://images.unsplash.com/photo-1565625443865-2c41cdb647d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJlbnRhbCUyMHJvb21zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    location: 'home10',
    description: 'Mbarara',
    rating: 4.5,
    price: 210,
  },
  {
    id: 11,
    photoUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlbnRhbCUyMHJvb21zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    location: 'Lira',
    description: 'home11',
    rating: 4.5,
    price: 210,
  },

];


const SearchScreen = () => {
  return (
    <View className='flex-1 pt-12 bg-white mx-3'>
      {/* <View className=''>
      <View style={styles.search}>       
        <Fontisto name='search' size={18} color='gray' style={styles.icon}/>
        <Text>Anywhere · Stay</Text>
      </View>

      <View style={styles.chips}>
        <Chip label="Dates" />
        <Chip label="Guests" />
        <Chip label="Filters" />
      </View>
      <Text style={styles.title} className='text-black mb-2'>300+ places to stay</Text>
      <Text>dd</Text>
      <PostCard />
      
    
      </View> */}
      <FlashList
      data={DATA}
      renderItem={({ item }) =><PostCard item={item} />}
      estimatedItemSize={20}
      
    />
     
      <StatusBar style="auto" />
    </View>
  )
}

 export default SearchScreen

 const styles = StyleSheet.create({
  chips: {
    flexDirection: "row",
  },
  chip: {
    borderRadius: 20,
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