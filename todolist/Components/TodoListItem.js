import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function TodoListItem({ item, removeTodo }) {

    const [completed, setCompleted] = useState(false)

    const toggleCompleted = () => {
        setCompleted(!completed)
      }

  return (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={toggleCompleted}>
        <Text style={[styles.todoText, completed && styles.completedText]}>
          {item}
        </Text>
      </TouchableOpacity>
      <Button title="Remove" onPress={removeTodo} />
    </View>
  )
}

const styles = StyleSheet.create({
    todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
})