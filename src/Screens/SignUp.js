import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/Custombutton";

const onSignUpPressed = () => {
  console.warn("go to login");
};

const onSignInWithGooglePressed = () => {
  console.warn("google");
};
const onRegisterPressed = () => {
  console.warn("registerd");
};

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.screentxt}> Sign Up Here</Text>

      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />

      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomInput
        placeholder="Repeat Password"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry={true}
      />

      <CustomButton
        onPress={() => navigation.navigate("Home")}
        Buttontext="Register"
      />

      <CustomButton
        onPress={onSignInWithGooglePressed}
        Buttontext="Sign in with Google"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />

      <TouchableOpacity
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text>Have and account ? Login Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  screentxt: {
    fontSize: 30,
    fontWeight: "500",
    color: "#3B71F3",
    textAlign: "center",
    padding: 20,
  },

  forgotPassword: {
    padding: 10,
    fontWeight: "bold",
    color: "#23120B",
  },
});
export default SignIn;
