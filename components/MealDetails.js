const MealDetails = () => {


  return <View style={styles.details}>
    <Text style={styles.detailItem}>{duration} MINUTES  |</Text>
    <Text style={styles.detailItem}>{complexity.toString().toUpperCase()}  |</Text>
    <Text style={styles.detailItem}>{affordability.toString().toUpperCase()}</Text>
  </View>
};

export default MealDetails;