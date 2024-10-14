import { View, Text, StyleSheet, TextInput } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function SearchBar() {
  return (
    <View>
      <TextInput></TextInput>
      <FontAwesome name="search" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({});
