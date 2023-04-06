import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const clickHandler = () => console.log("Hi Mike");
export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Text>Hi gus!</Text>
        <StatusBar style="auto" />
        <Button
          title="clickme"
          // onPress={() => {
          //   console.log("Hi Mike");
          // }}
          onPress={clickHandler}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
});
