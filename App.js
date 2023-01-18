import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import DetailsScreen from './screens/DetailsScreen';
import YouTubeScreen from './screens/YouTubeScreen';
import FashionScreen from './screens/FashionScreen';
import Instagram from './screens/Instagram';
import TailwindComponents
 from './screens/TailwindComponents';
// const Stack = createStackNavigator();
const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer 
    theme={{ colors: { background: '#fff' } }}
    >

    <TailwindProvider>
    
    <Stack.Navigator screenOptions={{
        headerMode: 'screen',       
        headerShadowVisible: false,
        headerShown: false,
        
      
      }}>
        {/* <Stack.Screen name="Airbnb" component={HomeScreen} options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
            headerTintColor: '#0284c7',
            //headerShadowVisible: false,
      
          }} /> */}

          <Stack.Screen name="Instagram" component={Instagram} options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
            headerTintColor: '#0284c7',
            //headerShadowVisible: false,
      
          }} />
//
          
          <Stack.Screen name="Search" component={SearchScreen} options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
            headerTintColor: '#0284c7',
            //headerShadowVisible: false,
      
          }} />

<Stack.Screen name="Details" component={DetailsScreen} 
  sharedElements={(route, otherRoute, showing) => {
    const { item } = route.params;
    return [item.id];
  }}
  options={{
    presentation: 'card',
    cardStyleInterpolator: ({ current: { progress }}) => {
      return { cardStyle: { opacity: progress }}; 
    },
    cardStyle: {
      backgroundColor: 'transparent'
    },
  }}
/>

          <Stack.Screen name="Fashion" component={FashionScreen} options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
            headerTintColor: '#0284c7',
            //headerShadowVisible: false,
      
          }} />
           <Stack.Screen name="TailwindComponents" component={TailwindComponents} options={{
            cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
            headerTintColor: '#0284c7',
            //headerShadowVisible: false,
      
          }} />
      
        
      </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  )
}

export default App