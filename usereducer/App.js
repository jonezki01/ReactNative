import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';
import React, { useReducer, useState } from 'react'

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now().toString(), text: action.payload }];
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(todoReducer, []);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
    }
  };

  const removeTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => removeTodo(item.id)}>
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add a new task"
          value={text}
          onChangeText={setText}
        />
        <Button title="Save" onPress={addTodo} />
      </View>
      <FlatList
        data={state}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  todoItem: {
    padding: 15,
    backgroundColor: '#f9c2ff',
    marginBottom: 10,
    borderRadius: 5,
  },
  todoText: {
    fontSize: 18,
  },
});
