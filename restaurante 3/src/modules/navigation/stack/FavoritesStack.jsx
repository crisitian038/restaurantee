import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import Favorite from '../../favorites/adapters/screens/Favorite';

const Stack = createStackNavigator();

export default function FavoritesStack() {
  return (
   
   <Stack.Navigator>
    <Stack.Screen  
    name='Favorites'
    component={Favorite}
    options={{title: 'mis favoritos'}}
    />
   </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})