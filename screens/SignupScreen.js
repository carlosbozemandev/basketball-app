import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

const SignupScreen = () => {
  const navigation = useNavigation();
  const { userDetails, updateUserDetails } = useUser();
  const [userdata, setuserdata] = useState({
    name: userDetails?.name || "",
    email: userDetails?.email || "",
    phoneNumber: userDetails?.phoneNumber || "",
    image:
      userDetails?.image ||
      "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setuserdata((prevDetails) => ({
        ...prevDetails,
        image: result.assets[0].uri,
      }));
    }
  };

  console.log("User Details come from async storage:", userDetails);

  const handleSignup = () => {
    // Access user details from the state
    console.log("User Details:", userdata);
    if (!userdata.name || !userdata.email || !userdata.phoneNumber) {
      alert("Please fill in all the details");
      return;
    }

    // Update the user details in the context
    updateUserDetails(userdata);

    // Perform signup logic with the userdata
    // Navigate to the home screen
    navigation.navigate("TabScreen");
  };

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: "https://png.pngtree.com/thumb_back/fh260/background/20190222/ourmid/pngtree-orange-ink-background-gradient-color-fruit-background-poster-image_49305.jpg",
      }}
      resizeMode="cover"
    >
      <Text style={styles.header}>Sign Up</Text>

      <Image
        source={
          userdata?.image
            ? { uri: userdata?.image }
            : {
                uri: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
              }
        }
        style={styles.imagePreview}
      />
      <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
        <Ionicons name="image-outline" size={24} color="white" />
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={userdata?.name}
          onChangeText={(text) =>
            setuserdata((prevDetails) => ({ ...prevDetails, name: text }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={userdata?.email}
          onChangeText={(text) =>
            setuserdata((prevDetails) => ({
              ...prevDetails,
              email: text,
            }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={userdata?.phoneNumber}
          onChangeText={(text) =>
            setuserdata((prevDetails) => ({
              ...prevDetails,
              phoneNumber: text,
            }))
          }
        />
      </View>

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imagePreview: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  imagePickerButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    width: 70,
  },
  imagePickerButtonText: {
    color: "white",
  },
  signupButton: {
    backgroundColor: "#2ecc71",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  signupButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default SignupScreen;
