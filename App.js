import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/Home/HomeScreen.js';
import ViewingScreen from './Screens/Viewing/ViewingScreen';
import MeScreen from './Screens/Me/MeScreen';
import StoriesListScreen from './Screens/Viewing/stories/StoriesListScreen.js';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Home Stack for Home-related screens
const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Stories" component={StoriesListScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

// Viewing Stack for Viewing-related screens
const ViewingStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Viewing" component={ViewingScreen} options={{ headerShown: false }} />
    {/* Add other screens related to Viewing here */}
  </Stack.Navigator>
);

// Me Stack for Me-related screens
const MeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Me" component={MeScreen} options={{ headerShown: false }} />
    {/* Add other screens related to Me here */}
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === 'HomeTab') {
              iconName = focused
                ? require('./assets/icons/home.png')
                : require('./assets/icons/home.png');
            } else if (route.name === 'ViewingTab') {
              iconName = focused
                ? require('./assets/icons/viewing.png')
                : require('./assets/icons/viewing.png');
            } else if (route.name === 'MeTab') {
              iconName = focused
                ? require('./assets/icons/me.png')
                : require('./assets/icons/me.png');
            }
            return <Image source={iconName} style={styles.icon} />;
          },
          tabBarActiveTintColor: '#ff6347',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { paddingBottom: 1, height: 70 },
          tabBarActiveBackgroundColor: '#E8E8E8',
          tabBarInactiveBackgroundColor: '#E8E8E8',
          headerShown: false,
        })}
      >
        {/* Each tab has its own stack navigator */}
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ title: 'Home' }} />
        <Tab.Screen name="ViewingTab" component={ViewingStack} options={{ title: 'Viewing' }} />
        <Tab.Screen name="MeTab" component={MeStack} options={{ title: 'Me' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 40,
  },
});

export default App;
