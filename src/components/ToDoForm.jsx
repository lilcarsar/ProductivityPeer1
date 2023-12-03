import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} color="#654321" />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#D2B48C', // light brown
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#A0522D', // brown
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    color: '#FFFFFF', // white
  },
});

export default ToDoForm;
