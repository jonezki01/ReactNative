import { StyleSheet, Text, View, FlatList } from 'react-native';
import TodoInput from './Components/TodoListInput'
import TodoListItem from './Components/TodoListItem'
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    loadTodos()
  }, [])

  useEffect(() => {
    saveTodos()
  }, [todoList])

  const loadTodos = async () => {
    try {
      const todos = await AsyncStorage.getItem('todoList')
      if (todos !== null) {
        setTodoList(JSON.parse(todos))
      }
    } catch (error) {
      console.error('Failed to load todos', error)
    }
  }

  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem('todoList', JSON.stringify(todoList))
    } catch (error) {
      console.error('Failed to save todos', error)
    }
  }

  const addTodo = () => {
    if (todo.trim().length > 0) {
      setTodoList([...todoList, todo])
      setTodo('')
    }
  }

  const removeTodo = (index) => {
    let newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <FlatList
        data={todoList}
        renderItem={({ item, index }) => <TodoListItem item={item} removeTodo={() => removeTodo(index)} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
});
