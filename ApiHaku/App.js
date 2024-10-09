import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios'

export default function App() {

  const [apiData, setApiData] = useState(null)
  const [macros, setMacros] = useState({
    calories: null,
    protein: null,
    fat: null,
    carbs: null,
  });

  const fetchData = async (ingredient) => {
    const appId = 'YOUR_APP_ID_HERE';
    const apiKey = 'YOUR_API_KEY_HERE';
    const url = `https://api.edamam.com/api/nutrition-details?app_id=${appId}&app_key=${apiKey}`;

    try {
      const response = await axios.post(url, {
        title: ingredient,
        ingr: [`1 ${ingredient}`]
      })

      setApiData(response.data)

      const { ENERC_KCAL, PROCNT, FAT, CHOCDF } = response.data.totalNutrients;
      setMacros({
        calories: ENERC_KCAL ? ENERC_KCAL.quantity : null,
        protein: PROCNT ? PROCNT.quantity : null,
        fat: FAT ? FAT.quantity : null,
        carbs: CHOCDF ? CHOCDF.quantity : null,
      });

      console.log(response.data)

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Potato" onPress={() => fetchData('potato')} />
        <Button title="Banana" onPress={() => fetchData('banana')} />
      </View>
      <View style={styles.apiDataContainer}>
        {apiData ? (
          <>
            <Text>Calories: {macros.calories ? macros.calories.toFixed(1) : 'N/A'} kcal</Text>
            <Text>Protein: {macros.protein ? macros.protein.toFixed(1) : 'N/A'} g</Text>
            <Text>Fat: {macros.fat ? macros.fat.toFixed(1) : 'N/A'} g</Text>
            <Text>Carbs: {macros.carbs ? macros.carbs.toFixed(1) : 'N/A'} g</Text>
          </>
        ) : (
          <Text>API Data will be displayed here</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    backgroundColor: '#948988'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    backgroundColor: '#bdb8b7',
    padding: 10,
    borderRadius: 10,
  },
  apiDataContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#bdb8b7',
    borderRadius: 10,
  },
});
