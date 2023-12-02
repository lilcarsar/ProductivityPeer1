import React, { useState } from 'react';
import { SafeAreaView, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

function ToDo({ navigation }) {
  const [tasks, setTasks] = useState([
    { title: 'Do laundry', completed: false },
    { title: 'Go to gym', completed: false },
    { title: 'Walk dog', completed: false },
  ]);

  const addTask = (taskTitle) => {
    setTasks([...tasks, { title: taskTitle, completed: false }]);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} toggleTask={toggleTask} />
        <ToDoForm addTask={addTask} />
        <Button title="Go to Goals" onPress={() => navigation.navigate('Goals')} />
      </SafeAreaView>
    </MainLayout>
  );
}

export default ToDo;
