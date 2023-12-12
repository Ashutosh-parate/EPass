import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Center } from "native-base";
import CustomButton from "../components/Custombutton";

const UserDashboard = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: "95%",
            height: 750,
            backgroundColor: "#EAF1FB",
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#2C5686",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              Apply for new Pass
            </Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              1. All the essential service providers / individuals can apply for
              Travel pass through this platform
            </Text>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              2. Fill all the details correctly and click on submit
            </Text>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              3. Combine all the relevant documents in a single file while
              uploading
            </Text>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              4. After submitting the application, you will receive a token ID.
              Save it, and use it to check the status of your application
            </Text>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              5. After the verification and approval by the concerned
              departments, you can download the e-pass using the token ID
            </Text>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              6. The e-pass will contain your details, vehicle number, validity,
              and a QR code
            </Text>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              7. Keep a soft / hard copy with you while traveling and show it to
              the police when asked
            </Text>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              8. It is a punishable offense to copy, misuse, or use it after the
              valid date or without authorization
            </Text>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              9. The size of the photo should not exceed 200 KB, and the size of
              the relevant document should not exceed 500 KB.
            </Text>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              10. The application form should be filled in English only
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <CustomButton
              Buttontext={"Apply for pass here"}
              onPress={() => navigation.navigate("passForm")}
            />
          </View>
        </View>
        <View
          style={{
            width: "95%",
            height: 480,
            backgroundColor: "#EAF1FB",
            borderWidth: 1,
            borderRadius: 5,
            marginTop: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#2C5686",
              alignItems: "center",
              padding: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Download Pass</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              1. आपल्या अर्जाची स्थिती तपासण्यासाठी खालील लिंक / बटण वापरा
            </Text>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              2. आपल्या अर्जाची स्थिती तपासण्यासाठी आपण जतन केलेला किंवा आपणांस
              प्राप्त झालेला टोकन आयडी प्रविष्ट करण्याची आवश्यकता असेल
            </Text>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              3. आपला अर्ज मंजूर झाल्यास आपण या पेज वरून आपला अत्यावश्यक सेवा
              वाहन ई-पास डाउनलोड करू शकतात
            </Text>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              1. Use the following page to check the status of your application
            </Text>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              2. You will need to enter the Token ID to check your application
              status
            </Text>
            <Text style={{ fontSize: 15, marginVertical: 6 }}>
              3. If your application is approved, you can download your e-Pass
              from this page
            </Text>

            <View style={{ alignItems: "center" }}>
              <CustomButton
                Buttontext={"Check Status / Download Pass"}
                onPress={() => navigation.navigate("DownloadPass")}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserDashboard;

const styles = StyleSheet.create({});
