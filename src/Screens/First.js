import { StyleSheet, Image } from "react-native";
import React from "react";
import { Box, Button, NativeBaseProvider } from "native-base";

const First = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Box
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: "90%", borderRadius: 10 }}
          source={require("../images/etp.png")}
        />
        <Button
          style={{
            width: "80%",
            marginVertical: 20,
            backgroundColor: "#3B71F3",
          }}
          onPress={() => navigation.navigate("SignIn")}
        >
          Admin
        </Button>
        <Button
          style={{ width: "80%", backgroundColor: "#3B71F3" }}
          onPress={() => navigation.navigate("UserDashboard")}
        >
          User
        </Button>
      </Box>
    </NativeBaseProvider>
  );
};

export default First;

const styles = StyleSheet.create({});
