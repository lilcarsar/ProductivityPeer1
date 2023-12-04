import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import NotesForm from '../components/NotesForm';
import NotesList from '../components/NotesList';

function NotesPage() {
  const [savedNotes, setSavedNotes] = useState([]);

  const handleSaveNote = (note) => {
    setSavedNotes([...savedNotes, note]);
  };

  return (
    <MainLayout>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Quick Notes</Text>
        <NotesForm onSaveNote={handleSaveNote} />
        <NotesList savedNotes={savedNotes} />
      </SafeAreaView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
});

export default NotesPage;


