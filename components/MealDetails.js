import { View, Text, StyleSheet } from 'react-native';

const MealDetails = ({ duration, complexity, affordability }) => {


  return <View style={styles.details}>
    <Text style={styles.detailItem}>{duration} MINUTES  |</Text>
    <Text style={styles.detailItem}>{complexity.toString().toUpperCase()}  |</Text>
    <Text style={styles.detailItem}>{affordability.toString().toUpperCase()}</Text>
  </View>
};

export default MealDetails;

const styles = StyleSheet.create(
  {
    details: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 8,
    },
    detailItem: {
      marginHorizontal: 4,
      fontSize: 12,
    },
  },
);