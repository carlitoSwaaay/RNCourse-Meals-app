import { View, Text, Pressable, StyleSheet, Image } from 'react-native';

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text>{duration}m</Text>
          <Text>{complexity.toUppercase()}</Text>
          <Text>{affordability.toUppercase()}</Text>
        </View>
      </Pressable>
  </View>
);
};

export default MealItem;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});

