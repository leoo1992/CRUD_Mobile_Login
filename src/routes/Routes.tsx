import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './Stack.Routes';

export function Routes () {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}