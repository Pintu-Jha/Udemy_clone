import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from "./Screens/Splash";
import Main from "./Screens/Main";
import ViewCourse from "./Screens/viewCourse";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="viewCourse"
                    component={ViewCourse}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default AppNavigator;
