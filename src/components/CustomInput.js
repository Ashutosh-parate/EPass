import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

export default function ({ value, setValue, placeholder, secureTextEntry }) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "90%",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    padding: 10,
    borderColor:"#ced4da",
    borderStyle:'solid',
    borderWidth: 1
  },
  input: {},
});
