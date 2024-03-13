import react from "react";
import {createStackNavigator} from "@react-navigation/stack"
import Login from "../../auth/adapters/SCREENS/login";
import CreateAccount from "../../auth/adapters/SCREENS/CreateAccount";


const Stack = createStackNavigator();

export default function AuthStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name='Login'
            component={Login}
            options={{title: 'inicio de sesion'}}
            />
            <Stack.Screen
            name= 'createAccount'
            component={CreateAccount}
            options= {{title: 'crear cuanta'}}
            />

        </Stack.Navigator>
    )
}