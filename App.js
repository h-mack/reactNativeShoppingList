import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

export default function App() {
  console.log(uuid());

  const [items, setItems] = useState([
    {
      id: uuid(),
      text: "Milk",
    },
    {
      id: uuid(),
      text: "Eggs",
    },
    {
      id: uuid(),
      text: "Bread",
    },
    {
      id: uuid(),
      text: "Juice",
    },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Please enter an item", [{ text: "Ok" }]);
    } else {
      setItems((prevItems) => {
        return [{ id: uuid(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
