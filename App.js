import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

const clickHandler = () => console.log("Hi Mike");
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi gus!</Text>
      <StatusBar style="auto" />
      <Button
        title="clickme"
        // onPress={() => {
        //   console.log("Hi Mike");
        // }}
        onPress={clickHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
