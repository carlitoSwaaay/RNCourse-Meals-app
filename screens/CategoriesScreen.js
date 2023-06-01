import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = (item) => {
  return;
};

const CategoriesScreen = () => {
  return <FlatList data={CATEGORIES} keyExtractor={(item) => item} renderItem={renderCategoryItem} />
};

export default CategoriesScreen;