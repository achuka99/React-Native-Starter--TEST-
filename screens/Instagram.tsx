import { View, Text, Image, ScrollView, StyleSheet, Animated, Dimensions } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { CameraIcon, ChevronDownIcon, PaperAirplaneIcon, SparklesIcon, UserIcon } from "react-native-heroicons/solid";
import Logo from '../components/Logo';
import FeatherIcon from 'react-native-vector-icons/Feather'
import Stories from '../components/Stories';
import { posts } from '../constants/data';
import Post from '../components/Post';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reanimated, { cond, eq, or, Value } from 'react-native-reanimated'
import { State } from 'react-nativ e-gesture-handler';


const { height } = Dimensions.get("window");

const Instagram = () => {
  const items = posts.map((post) => ({
    state: new Value(State.UNDETERMINED),
    post,
    
  }));
  const top = height ;

   // This animation value needs to come from Vanilla Animated
   const y = new Animated.Value(0);

      const isActive = or(
        ...(items.map(({ state }) => eq(state, State.ACTIVE)) as Parameters<
          typeof or
        >)
      );
    
      const opacity = cond(isActive, 0.5, 0)
  return (
    <View className='flex-1 background-white'>
        {/* Custom header */}
        


<Animated.ScrollView
        pinchGestureEnabled={false}
        showsVerticalScrollIndicator={false}
        // stickyHeaderIndices={[0]}
        scrollEventThrottle={1}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y } } }], {
          useNativeDriver: true,
        })}
        
        // contentContainerStyle={{
        //   paddingBottom: FOOTER_HEIGHT + insets.bottom,
        // }}
      >
        <Animated.View style={{ transform: [{ translateY: y }], zIndex: 2, }}>
           <Header />
        </Animated.View>
        <Stories />
        {items.map(({ post, state  }) => (
          <Post key={post.id} {...{ post, state }} />
        ))}
        <Animated.View style={{
           transform: [{ translateY: y }], 
           zIndex: 2,
           position: "absolute",
           left: 0,
           right: 0,
           top,
           }}>
        <Footer />
        </Animated.View>
        <Reanimated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            zIndex: 2,
            backgroundColor: "black",
            opacity,
          }}
          pointerEvents="none"
        />
      </Animated.ScrollView>
      {/*                */}
      <StatusBar style="auto" />
    </View>
  )
}

export default Instagram