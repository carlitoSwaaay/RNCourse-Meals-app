import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { MEALS } from '../data/dummy-data';
import { TabRouter } from '@react-navigation/native';

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;


  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId)
  })

  return (
    <View>
      <Text>Meals Overview Screen - {catId}</Text>
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