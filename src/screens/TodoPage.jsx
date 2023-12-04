import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

function ToDoPage() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { title: task, completed: false }]);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };
    
    return (
      <MainLayout>
        <SafeAreaView style={styles.container}>
        <Text style={styles.title}>To-Do</Text>
          <ToDoForm addTask={addTask} />
          <ToDoList tasks={tasks} toggleTask={toggleTask} />
      </SafeAreaView>
      </MainLayout>
    );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
    title:{
      fontSize: 40,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#000',
    },
    });
    
    export default ToDoPage;
    
      