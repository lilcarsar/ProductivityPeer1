import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoPage from './screens/TodoPage';
import GoalsPage from './screens/GoalsPage';
import HomePage from './screens/HomePage';
import NotesPage from './screens/NotesPage';

const Stack = createNativeStackNavigator();

function App()  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductivityPeer" component={HomePage} />
        <Stack.Screen name="Todo" component={TodoPage} />
        <Stack.Screen name="Goals" component={GoalsPage} />
        <Stack.Screen name="Notes" component={NotesPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
