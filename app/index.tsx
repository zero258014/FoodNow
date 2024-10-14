import { Link } from "expo-router";
import { View, Text, StyleSheet, TextInput } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function HomeScreen() {
  return (
    <View>
      <Text>FoodNow!!</Text>
      <View>
        <Link href="/search">
          検索！
          <FontAwesome name="search" size={24} color="black" />
        </Link>
        <View>
          <Link href="/decideForMe">決めてもらう</Link>
          <Link href="/author">作者</Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
