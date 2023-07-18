import { StyleSheet, FlatList, View, Text } from 'react-native';
import { MEALS } from '../data/dummy-data';


const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;


  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  renderMealItem = (itemData) => {
    return (
      <View>
        <Text></Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={item.id} renderItem={ } />
    </View>
  )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
}
);