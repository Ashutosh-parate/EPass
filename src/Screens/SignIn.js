import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/Custombutton";
import logo from "../images/etp.png";

const onSignInPressed = () => {
  console.warn("Sign in");
};
const onForgotPasswordPressed = () => {
  console.warn("Forgot password");
};
const onSignInWithGooglePressed = () => {
  console.warn("google");
};
const onSignUpPressed = () => {
  console.warn("go to signup");
};
const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <View style={styles.greybox}>
        <Text style={styles.screentxt}> Sign in Here</Text>

        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomButton
          onPress={() => navigation.navigate("GateWay")}
          Buttontext="Sign in"
        />

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={onForgotPasswordPressed}
        >
          <Text> Forgot password?</Text>
        </TouchableOpacity>

        <CustomButton
          onPress={onSignInWithGooglePressed}
          Buttontext="Sign in with Google"
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />

        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text>Don't have and account ? Create one</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 1,
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    borderRadius: 20,
    width: "96%",
    marginTop: 40,
  },
  screentxt: {
    fontSize: 30,
    fontWeight: "500",
    color: "#23120B",
    textAlign: "center",
    padding: 20,
  },
  greybox: {
    backgroundColor: "white",
    width: "96%",
    height: "90%",
    alignItems: "center",
    borderRadius: 50,
  },
  forgotPassword: {
    padding: 10,
    fontWeight: "bold",
    color: "#23120B",
  },
});
export default SignIn;
