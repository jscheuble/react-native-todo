import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './components/header';
import TodoItem from './components/todoItem';

const todos = [
  { key: 1, text: 'water plants' },
  { key: 2, text: 'walk dog' },
  { key: 3, text: 'play zelda' }
]

const App = () => {
  const [tasks, setTasks] = useState(todos);
  const clickHandler = (key) => {
    setTasks((todos) => {
      return todos.filter(todo => todo.key !== key);
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TodoItem item={item} clickHandler={clickHandler} />
            )}
          />
        </View>
      </View>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#32a89e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
