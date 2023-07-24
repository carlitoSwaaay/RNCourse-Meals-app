import { View, Text, Pressable, StyleSheet, Image } from 'react-native';

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable>
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}</Text>
          <Text style={styles.detailItem}>{complexity.toUppercase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUppercase()}</Text>
        </View>
      </Pressable>
  </View>
);
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    padding: 18,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

