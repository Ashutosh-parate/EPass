import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import CustomButton from "../components/Custombutton";
import QRCode from "react-native-qrcode-svg";

const DownloadPass = () => {
  const [input, setInput] = useState("");
  const [qrValue, setQrValue] = useState("");
  return (
    <View
      style={{
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}>
        Please Enter Your Token ID below:
      </Text>
      <View
        style={{
          width: "95%",
          height: 450,
          backgroundColor: "#EAF1FB",
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Enter Unique Token Id
        </Text>
        <View style={{ borderWidth: 1, padding: 20, borderRadius: 5 }}>
          <QRCode
            value={qrValue ? qrValue : "NA"}
            size={200}
            color="white"
            backgroundColor="black"
          ></QRCode>
        </View>
        <TextInput
          onChangeText={(text) => {
            setInput(text);
          }}
          style={{
            backgroundColor: "white",
            borderWidth: 1,
            padding: 10,
            width: "90%",
            marginBottom: 10,
            borderRadius: 5,
            marginTop: 20,
          }}
        />
        <CustomButton
          Buttontext={"check Token"}
          onPress={() => {
            setQrValue(input);
          }}
        />
      </View>
    </View>
  );
};

export default DownloadPass;
