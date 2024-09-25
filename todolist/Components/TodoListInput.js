import { View, TextInput, Button, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'

export default function TodoListInput({ todo, setTodo, addTodo }) {

    const handleAddTodo = () => {
        if (todo.trim().length === 0) {
          Alert.alert('Error', 'Todo cannot be empty')
        } else {
          addTodo()
        }
      }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add Todo"
        value={todo}
        onChangeText={setTodo}
      />
      <Button title='Save' onPress={handleAddTodo} />
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
    },
    })