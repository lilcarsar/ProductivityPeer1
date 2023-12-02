// Sample React Native App with Navigation

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoPage from './screens/TodoPage';
import GoalsPage from './screens/GoalsPage';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Todo" component={TodoPage} />
        <Stack.Screen name="Goals" component={GoalsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
