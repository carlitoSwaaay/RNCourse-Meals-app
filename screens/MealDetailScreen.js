import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native'





const MealDetailScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;


  return (
    <View>
      <Text>MealDetailScreen</Text>
    </View>
  );

}

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})