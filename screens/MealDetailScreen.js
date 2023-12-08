import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'





const MealDetailScreen = ({ route }) => {

  const mealId = route.params.mealId;

  return (
    <View>
      <Text>MealDetailScreen ({mealId})</Text>
    </View>
  );

}

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})