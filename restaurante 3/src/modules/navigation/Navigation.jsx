import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../auth/adapters/SCREENS/login';
import CreateAccount from '../auth/adapters/SCREENS/CreateAccount';
import AuthStack from './stack/AuthStack';
import FavoritesStack from './stack/FavoritesStack';
import HomeStack from './stack/HomeStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator ScreenOptions={{headerShown: false }}>
                
            <Tab.Screen
                name='HomeStack'
                component={HomeStack}
                options={{title: 'inicio'}}
                />
                   <Tab.Screen
                name='FavoritesStack'
                component={FavoritesStack}
                options={{title: 'favoritos'}}
                />
                <Tab.Screen 
                name='AuthStack'
                component={AuthStack}
                options={{title: 'cuenta'}}
                />
             <Tab.Screen 
                name='Notications'
                component={PushNotification}
                options={{title: 'notification'}}
                />

            </Tab.Navigator>
            </NavigationContainer>
    )
}

const getIconName = (routeName, focused) => {
    let iconName = "";
    let iconType = "";
  
    switch (routeName) {
      case "HomeStack":
        iconName = focused ? "home" : "home-outline";
        iconType = "material-community"; // Asumiendo que quieres usar Material Community Icons
        break;
      case "FavoritesStack":
        iconName = focused ? "heart" : "heart-o"; // AQUI SE CAMBIA EL ICONO QUE QUIERAS UTILIZAR POR SU NOMBRE Y SU SUBNOMBRE ES EL QUE DEFINE SI ESTA RELLENO O SOLO LAS LINEAS DEL ICONO
        iconType = "font-awesome"; //AQUI SE CAMBIA LA HERRAMIENTA DE LOS ICONOS QUE QUIERAS UTILIZAR
        break;
      case "AuthStack":
        iconName = focused ? "cog" : "cog-outline";
        iconType = "material-community"; // Asumiendo que quieres usar Material Icons
        break;
      case "Notifications":
        iconName = focused ? "notifications" : "notifications-none";
        iconType = "material"; // Asumiendo que quieres usar Material Icons
        break;
    }
  
    return { iconName, iconType };
}
