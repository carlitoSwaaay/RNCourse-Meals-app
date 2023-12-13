import { Image, StyleSheet, Text, View } from 'react-native'

import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';


const MealDetailScreen = ({ route }) => {

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
      </View>
      <Text style={styles.subtitle}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredients) => (
        <Text key={ingredients} style={styles.detailText}>{ingredients}</Text>
      ))}
      <Text style={styles.subtitle}>Steps</Text>
      {selectedMeal.steps.map((steps) => (
        <Text key={steps} style={styles.detailText}>{steps}</Text>
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
  detailText: {
    color: 'white'
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 6,
    textAlign: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 2,


  },
  container: {
    flex: 1,
    margin: 4,
  },
})