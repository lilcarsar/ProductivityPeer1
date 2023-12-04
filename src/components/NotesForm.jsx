import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function NotesForm({ onSaveNote }) {
  const [notes, setNotes] = useState('');

  const saveNote = () => {
    if (notes.trim() !== '') {
      onSaveNote(notes);
      setNotes('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your note"
        multiline
        value={notes}
        onChangeText={(text) => setNotes(text)}
      />
      <Button title="Save Note" onPress={saveNote} color="#DFD1AD" titleStyle={{ color: '#000' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    color: '#000',
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    textAlignVertical: 'top',
    borderRadius: 15,
  },
});

export default NotesForm;
