import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import React from "react";
import Dashboard from "../images/Dashboard.png";

import MakeEntry from "../images/MakeEntry.png";
import VerifyEntry from "../images/VerifyEntry.png";
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome user</Text>
      <View style={styles.lilcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
          <Image style={styles.select} source={Dashboard} />
        </TouchableOpacity>
      </View>
      <View style={styles.lilcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate("MakeEntry")}>
          <Image style={styles.select} source={MakeEntry} />
        </TouchableOpacity>
      </View>
      <View style={styles.lilcontainer}>
        <TouchableOpacity onPress={() => navigation.navigate("VerifyEntry")}>
          <Image style={styles.select} source={VerifyEntry} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: "500",
    paddingBottom: 22,
  },
  lilcontainer: {
    width: "90%",
    height: "30%",
  },
  select: {
    width: "100%",
    height: "80%",
    borderRadius: 10,
  },
});
export default Home;
