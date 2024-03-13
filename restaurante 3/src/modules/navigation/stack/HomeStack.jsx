import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
 <Stack.Navigator>
<Stack.Screen 
name='Home'
component={Home}
options={{title: 'resturantes'}}

/>

 </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})

