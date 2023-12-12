import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Box, Button, NativeBaseProvider } from "native-base";

const GateWay = ({ navigation }) => {
  return (
    <ScrollView>
      <NativeBaseProvider>
        <View style={{ padding: 10, paddingHorizontal: 10 }}>
          <View style={{ padding: 10, alignItems: "center" }}>
            <Text style={{ marginTop: 5, fontSize: 20 }}>
              Welcome to Dashboard
            </Text>
            <Image
              style={{
                resizeMode: "contain",
                height: 100,
                width: "94%",
                borderRadius: 10,
                marginTop: 10,
                borderWidth: 1,
              }}
              source={require("../images/Dashboard.png")}
            />
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <View
              style={{
                width: 350,
                height: 100,
                backgroundColor: "#FFE3BB",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 5,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "400" }}>
                Pending Application
              </Text>
              <Button
                style={{ width: "60%", marginVertical: 5 }}
                backgroundColor="#3081D0"
              >
                View
              </Button>
            </View>
            <View
              style={{
                width: 350,
                height: 100,
                backgroundColor: "#FFE3BB",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "400" }}>
                Approved Application
              </Text>
              <Button
                style={{ width: "60%", marginVertical: 5 }}
                backgroundColor="#3081D0"
              >
                View
              </Button>
            </View>
            <View
              style={{
                width: 350,
                height: 100,
                backgroundColor: "#FFE3BB",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 5,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "400" }}>
                Rejected Application
              </Text>
              <Button
                style={{ width: "60%", marginVertical: 5 }}
                backgroundColor="#3081D0"
              >
                View
              </Button>
            </View>
            <View
              style={{
                width: 350,
                height: 100,
                backgroundColor: "#FFE3BB",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "400" }}>
                Expired Application
              </Text>
              <Button
                style={{ width: "60%", marginVertical: 5 }}
                backgroundColor="#3081D0"
              >
                View
              </Button>
            </View>
            <View
              style={{
                width: 350,
                height: 100,
                backgroundColor: "#FFE3BB",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 5,
                marginVertical: 10,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "400" }}>
                Generate New Epass
              </Text>
              <Button
                style={{ width: "60%", marginVertical: 5 }}
                backgroundColor="#65B741"
                onPress={() => navigation.navigate("passForm")}
              >
                Generate Pass
              </Button>
            </View>
          </View>
        </View>
      </NativeBaseProvider>
    </ScrollView>
  );
};

export default GateWay;

const styles = StyleSheet.create({});
