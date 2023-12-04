import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function NotesList({ savedNotes }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Notes:</Text>
      {savedNotes.map((note, index) => (
        <Text key={index} style={styles.savedNote}>
          {note}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    color: '#000',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  savedNote: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000',
  },
});

export default NotesList;

