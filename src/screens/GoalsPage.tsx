// GoalsPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const GoalsPage = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({ title: '', progress: 0 });

  const addGoal = () => {
    if (newGoal.title) {
      setGoals([...goals, { ...newGoal, id: Date.now() }]);
      setNewGoal({ title: '', progress: 0 });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Goals</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={newGoal.title}
        onChangeText={(text) => setNewGoal({ ...newGoal, title: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Progress"
        value={newGoal.progress.toString()}
        onChangeText={(text) => setNewGoal({ ...newGoal, progress: parseInt(text) })}
        keyboardType="numeric"
      />
      <Button title="Add Goal" onPress={addGoal} />
      {/* Display goals */}
      <View>
        {goals.map((goal) => (
          <Text key={goal.id}>{goal.title} - Progress: {goal.progress}%</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default GoalsPage;