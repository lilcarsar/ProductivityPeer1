import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks, toggleTask }) {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <Pressable key={index} onPress={() => toggleTask(index)}>
          <View style={[styles.task, task.completed ? styles.completed : styles.incomplete]}>
            <Text style={styles.taskText}>{task.title}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  incomplete: {
    backgroundColor: '#ffffff',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
