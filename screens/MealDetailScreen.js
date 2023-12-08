import { Image, StyleSheet, Text, View } from 'react-native'

import { MEALS } from '../data/dummy-data'





const MealDetailScreen = ({ route }) => {

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <View>

      </View>
      <Text>Ingredients</Text>

      <Text>Steps</Text>

    </View>
  );

}

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})