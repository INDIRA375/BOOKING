import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol'; // Custom Icon component
import { Colors } from '@/constants/Colors'; // Assuming Colors is a color configuration file
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme(); // Dynamically adjust color scheme

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, // Active tab color
        headerShown: false, // Hide header
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            height: 60,
            paddingTop: 10,
          },
          android: {
            height: 70,
            paddingTop: 15,
          },
          default: {
            height: 60,
            flexDirection: 'row',  // Arrange tabs horizontally
            justifyContent: 'space-around',  // Evenly space out the tabs
            alignItems: 'center',  // Vertically center tabs
          },
        }),
        tabBarPosition: 'top', // Positioning tab bar at the top of the page
      }}>

     
      <Tabs.Screen
        name="index"  // Home page or Login
        options={{
          title: 'Home',  // Tab title
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="home" color={color} />,  // Home Icon
        }}
      /> 


     <Tabs.Screen
        name="service"
        options={{
          title: 'Service',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="briefcase" color={color} />,
        }}
      />
    

      {/* Service Tab */}
      <Tabs.Screen
        name="Book"  // Service tab
        options={{
          title: 'book',  // Tab title
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paper.fill" color={color} />,  // Paper plane Icon (symbolizing Service)
        }}
      />

      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"  // Profile screen
        options={{
          title: 'Profile',  // Tab title
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person" color={color} />,  // Profile Icon
        }}
      />
    </Tabs>
  );
}