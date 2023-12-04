import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

function GoalList({ goals, toggleGoal }) {
  return (
    <ScrollView>
      {goals.map((goal, index) => (
        <Pressable key={index} onPress={() => toggleGoal(index)}>
          <View style={[styles.goal, goal.completed ? styles.completed : styles.incomplete]}>
            <Text style={styles.goalText}>{goal.title}</Text>
            <Text>{`Due Date: ${goal.dueDate}`}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  goal: {
    padding: 10,
    marginBottom: 5,
    borderColor: '#cccccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  incomplete: {
    backgroundColor: '#ffffff',
  },
  goalText: {
    fontSize: 16,
  },
});

export default GoalList;
