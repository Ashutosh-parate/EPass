import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeBaseProvider, Select } from "native-base";
import CustomButton from "../components/Custombutton";
import { useState } from "react";
import { ScrollView, TextInput } from "react-native-gesture-handler";

export default function PassForm({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [name, setName] = useState("");

  const showDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date,
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        const newDate = new Date(year, month, day);
        setDate(newDate);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };

  const showTimePicker = async () => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: time.getHours(),
        minute: time.getMinutes(),
        is24Hour: true,
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        const newTime = new Date();
        newTime.setHours(hour);
        newTime.setMinutes(minute);
        setTime(newTime);
      }
    } catch ({ code, message }) {
      console.warn("Cannot open time picker", message);
    }
  };

  const handleSubmit = () => {
    // Handle registration logic with the selected date and time
    console.log("Submitted Date:", date);
    console.log("Submitted Time:", time);
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <NativeBaseProvider>
        <View style={{ padding: 10 }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            Fill Out the details
          </Text>

          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Date</Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5,
            }}
            placeholder="Date"
            placeholderTextColor={"black"}
            editable={false}
          >
            Date: {date.toDateString()}
          </TextInput>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Time</Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5,
            }}
            placeholder="Time"
            editable={false}
            placeholderTextColor={"black"}
          >
            Time: {time.toLocaleTimeString()}
          </TextInput>
          <Text style={{ fontSize: 17, fontWeight: "bold" }}>Name</Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5,
            }}
            placeholder="Name"
            placeholderTextColor={"black"}
          />
          <Text style={{ fontSize: 17, fontWeight: "bold", marginBottom: 5 }}>
            Mobile Number
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 5,
            }}
            placeholder="Moblie Number"
            placeholderTextColor={"black"}
          />
          <Text style={{ fontSize: 17, fontWeight: "bold", marginBottom: 5 }}>
            Addhar Number(ID number)
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "D0D0D0",
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 5,
            }}
            placeholder="Addhar Number(ID number)"
            placeholderTextColor={"black"}
          />
          <Text style={{ fontSize: 17, fontWeight: "bold", marginBottom: 5 }}>
            Lisense Number
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "D0D0D0",
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 5,
            }}
            placeholder="Lisense Number"
            placeholderTextColor={"black"}
          />
          <Text style={{ fontSize: 17, fontWeight: "bold", marginBottom: 5 }}>
            Vehicle type
          </Text>
          <Select
            placeholder="Vehicle Type"
            width={391}
            borderColor={"black"}
            placeholderTextColor={"black"}
          >
            <Select.Item label="Car" value="key0" />
            <Select.Item label="Bike" value="key1" />
            <Select.Item label="Truck" value="key2" />
            <Select.Item label="Suv" value="key3" />
          </Select>
          <Text style={{ fontSize: 17, fontWeight: "bold", marginBottom: 5 }}>
            Purpose of Visit
          </Text>
          <Select
            placeholder="Purpose of Visit"
            width={391}
            borderColor={"black"}
            placeholderTextColor={"black"}
          >
            <Select.Item label="Travel and tourism" value="key0" />
            <Select.Item label="Medical" value="key1" />
            <Select.Item label="Business" value="key2" />
            <Select.Item label="Educational" value="key3" />
          </Select>
          <Text style={{ fontSize: 17, fontWeight: "bold", marginBottom: 5 }}>
            Number of People
          </Text>
          <TextInput
            style={{
              padding: 10,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 5,
            }}
            placeholder=" Number of People"
            placeholderTextColor={"black"}
          />
          <View style={{ alignItems: "center" }}>
            <CustomButton
              Buttontext={"Submit Details"}
              onPress={() => navigation.navigate("TokenNo")}
            />
          </View>
        </View>
      </NativeBaseProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
