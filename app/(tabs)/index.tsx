import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const handleAddition = (): void => {
    setCount((val) => val + 1);
  };
  const handleSubtraction = (): void => {
    if (count > 0) setCount((val) => val - 1);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.counterWrapper}>
          <Text style={styles.title}>Newbie's Counter App</Text>
          <Text style={styles.text}>{count}</Text>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button} onPress={handleSubtraction}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleAddition}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="dark" backgroundColor="#71797E" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "#71797E",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "semibold",
    padding: 10,
    width: 50,
    textAlign: "center",
  },
  counterWrapper: {
    width: "80%",
    backgroundColor: "#A9A9A9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
    borderRadius: 15,
    padding: 20,
  },
});
