import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalForm({ addGoal }) {
  const [goalText, setGoalText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAddGoal = () => {
    if (goalText && dueDate) {
      addGoal({ title: goalText, dueDate });
      setGoalText('');
      setDueDate('');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={[styles.input, {backgroundColor:"#ffffff"}]} 
        
        placeholder="Enter your goal"
        onChangeText={(text) => setGoalText(text)}
        value={goalText}
      />
      <TextInput
        style={[styles.input, {backgroundColor:"#ffffff"}]} 
        color="#000000"
        placeholder="Due Date"
        onChangeText={(text) => setDueDate(text)}
        value={dueDate}
      />
      <Button title="Add Goal" onPress={handleAddGoal} color="#D2C095"/> 
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#000000',
  },
});

export default GoalForm;
