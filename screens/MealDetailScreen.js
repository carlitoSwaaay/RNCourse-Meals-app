import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'





const MealDetailScreen = ({ route }) => {

  const mealId = route.params.mealId;

  return (
    <View>
      <Image />
      <Text>MealDetailScreen ({mealId})</Text>
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