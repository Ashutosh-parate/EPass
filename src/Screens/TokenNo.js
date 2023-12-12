import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Clipboard } from "react-native";
import CustomButton from "../components/Custombutton";
import { Center } from "native-base";

const generateRandomNumber = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";

  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
};

const TokenNo = () => {
  const [generatedNumber, setGeneratedNumber] = useState("");

  const handleGenerateNumber = () => {
    const randomNum = generateRandomNumber();
    setGeneratedNumber(randomNum);
  };

  const handleCopyToClipboard = () => {
    Clipboard.setString(generatedNumber);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          borderColor: "black",
          backgroundColor: "#EAF1FB",
          borderWidth: 1,
          width: 320,
          height: 350,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Token No:</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}>
          {generatedNumber}
        </Text>
        <CustomButton
          style={{}}
          Buttontext={"Generate Token"}
          onPress={handleGenerateNumber}
        />
        {generatedNumber ? (
          <CustomButton
            Buttontext={"Copy Token No"}
            onPress={handleCopyToClipboard}
          />
        ) : null}
      </View>
    </View>
  );
};

export default TokenNo;
