import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useUser } from "../context/UserContext";
import { useNavigation } from "@react-navigation/native";

const CustomSplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const { userDetails } = useUser();
  const navigation = useNavigation();

  useEffect(() => {
    const delaySplash = async () => {
      // Simulate a delay (e.g., fetching data, initializing app)
      await new Promise((resolve) => setTimeout(resolve, 3000));

      // Check user details and navigate accordingly
      if (userDetails) {
        navigation.navigate("TabScreen");
      } else {
        navigation.navigate("OnboardingScreen");
      }

      // Hide the loading indicator
      setLoading(false);
    };

    delaySplash();
  }, [userDetails, navigation]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {loading ? (
        <>
          <ActivityIndicator size="large" color="#000" />
        </>
      ) : null}
    </View>
  );
};

export default CustomSplashScreen;
