import { Image, StyleSheet, Text, View } from 'react-native'

import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';


const MealDetailScreen = ({ route }) => {

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
        />
      </View>
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredients) => (
        <Text key={ingredients}>{ingredients}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((steps) => (
        <Text key={steps}>{steps}</Text>
      ))}
    </View>
  );

}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  container: {
    flex: 1,
  },
})