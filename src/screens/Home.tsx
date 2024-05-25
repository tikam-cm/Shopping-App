import { FlatList, Pressable, StyleSheet, ScrollView } from "react-native";
import React from "react";
/** Navigation */
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackPramList } from "../App";

import ProductItem from "../components/ProductItem";
import Separator from "../components/Separator";

/** Data */
import { PRODUCT_LIST } from "../data/Constants";

type HomeProps = NativeStackScreenProps<RootStackPramList, "Home">;

const Home = ({ navigation }: HomeProps) => {
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={PRODUCT_LIST}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Details", {product: item})
            }
          >
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});
