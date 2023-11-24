import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './BottomNavigator';
import { useStore } from '../hooks/useStore';
import AuthStack from './AuthNavigator';

type RootStackParamList = {
    BottomTabs: undefined;
    Auth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
    const isAuthenticated = useStore((state) => state.isAuthenticated);
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {isAuthenticated ? (
                <Stack.Screen name="BottomTabs" component={BottomNavigator} />
            ) : (
                <Stack.Screen name="Auth" component={AuthStack} />
            )}
        </Stack.Navigator>
    );
};

export default RootStack;
