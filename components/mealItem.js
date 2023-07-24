import { View, Text, Pressable, StyleSheet } from 'react-native';

const MealItem = ({ title, imageUrl }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} />
          <Text>{title}</Text>
        </View>
      </Pressable>
  </View>
);
};

export default MealItem;

