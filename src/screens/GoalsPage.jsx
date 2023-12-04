
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import GoalList from '../components/GoalList';
import GoalForm from '../components/GoalForm';
import MainLayout from '../layouts/MainLayout';

function GoalPage() {
  const [goals, setGoals] = useState([]);

  const addGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  return (
    <MainLayout>
    <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Goals</Text>
      <GoalForm addGoal={addGoal} />
      <GoalList goals={goals} />
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

export default GoalPage;

