import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [age, setAge] = useState(0)
  const [rate, setRate] = useState('')

  const calculateRate = () => {
    const lower = Math.round((220 - age) * 0.65);
    const upper = Math.round((220 - age) * 0.85);

    setRate(lower + " - " + upper)
  }

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput 
        onChangeText={text => setAge(parseInt(text))}
        keyboardType='numeric'
        defaultValue='0'
      />
      <Text>Limits</Text>
      <Text>{rate}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Calculate" onPress={calculateRate} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginTop: 50,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
});
