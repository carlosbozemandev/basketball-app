import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../theme";

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSkip = () => {
    // You can customize the skip functionality
    console.log("Skip button pressed");
    // Navigate to the home screen or perform any other actions
    navigation.navigate("SignupScreen"); // Replace "Home" with the screen you want to navigate to
  };

  const onContinue = () => {
    // If it's the last onboarding screen, navigate to the home screen
    if (currentIndex === onboardingData.length - 1) {
      console.log("Continue to Home");
      navigation.navigate("SignupScreen"); // Replace "Home" with the screen you want to navigate to
    } else {
      // Update the content for the next onboarding screen
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const renderOnboardingScreen = (image, text, index) => (
    <ImageBackground
      key={index}
      source={image}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>{text}</Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.skipButton} onPress={onSkip}>
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continueButton} onPress={onContinue}>
            <Text style={styles.buttonText}>
              {currentIndex === onboardingData.length - 1 ? "Next" : "Next"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );

  const onboardingData = [
    {
      image: {
        uri: "https://previews.123rf.com/images/yusufdemirci/yusufdemirci1803/yusufdemirci180300285/97840391-vector-illustration-of-kid-playing-basketball.jpg",
      },
      text: `Welcome to the app! Create an account to get started`,
    },
    {
      image: {
        uri: "https://img.freepik.com/premium-vector/vector-illustration-cartoon-cute-little-boy-playing-basketball_353337-524.jpg?w=2000",
      },
      text: "You can create your own Basketball team.\n\nLook for players and add them to your team",
    },
    {
      image: {
        uri: "https://previews.123rf.com/images/sybirko/sybirko1701/sybirko170100014/69824625-cute-and-happy-cartoon-boy-playing-basketball-isolated-on-white-background-childish-vector.jpg",
      },
      text: "You can see latest news about basketball and players.\n\nYou can also see the latest scores of the matches",
    },
  ];

  return (
    <>
      {renderOnboardingScreen(
        onboardingData[currentIndex].image,
        onboardingData[currentIndex].text,
        currentIndex
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
  },
  text: {
    marginTop: 80,
    fontSize: 34,
    textAlign: "center",
    color: "white",
    paddingHorizontal: 20,
    fontWeight: "bold",
    letterSpacing: 1.5,
    lineHeight: 40,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    width: "100%",
    position: "absolute",
    bottom: 20,
  },
  skipButton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: colors.secondary,
  },
  continueButton: {
    padding: 15,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
  },
});

export default OnboardingScreen;
