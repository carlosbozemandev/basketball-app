import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Linking,
  BackHandler,
} from "react-native";
import { colors } from "../theme";
const url =
  "https://tank01-fantasy-stats.p.rapidapi.com/getNBANews?recentNews=true&maxItems=50";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d86b55a31emsh20bdf138bb0c79fp16104djsn08cbc3b5570f",
    "X-RapidAPI-Host": "tank01-fantasy-stats.p.rapidapi.com",
  },
};

// Functional component for the Home Screen
const HomeScreen = ({ navigation }) => {
  const [news, setNews] = React.useState([]);

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        setNews(res.body);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (navigation.isFocused()) {
          BackHandler.exitApp();
          return true;
        }
        return false;
      }
    );

    return () => backHandler.remove();
  }, [navigation]);

  return (
    // Background Image for the Home Screen
    <ImageBackground
      source={{
        uri: "https://media.istockphoto.com/id/535814795/photo/basketball-player-in-jump-shot.webp?b=1&s=170667a&w=0&k=20&c=i7OnE5znRzS3h9EpWH8EaD5cbIlv9V7ArC3cdMFo4Ro=",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        {/* Logo for the Home Screen */}
        <Image
          source={{
            uri: "https://seeklogo.com/images/B/basketball-logo-15048F5611-seeklogo.com.png",
          }}
          style={{ width: 150, height: 150, alignSelf: "center" }}
        />

        {/* Heading for the Home Screen */}
        <Text style={styles.heading}>Welcome to Basketball Fantasy Team</Text>

        {/* Heading for the Latest News section */}
        <Text style={[styles.heading, { textAlign: "left" }]}>
          Latest News:
        </Text>

        {/* FlatList to display news items horizontally */}
        <FlatList
          data={news}
          keyExtractor={(item) => item.link}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            // TouchableOpacity for each news item, opening the link in the browser
            <TouchableOpacity
              style={styles.newsCard}
              onPress={() => {
                Linking.openURL(item.link);
              }}
            >
              {/* News image */}
              <Image source={{ uri: item.image }} style={styles.newsImage} />

              {/* News title */}
              <Text style={styles.newsTitle}>{item.title}</Text>

              {/* "See More" button */}
              <TouchableOpacity
                style={styles.seeMoreButton}
                onPress={() => {
                  Linking.openURL(item.link);
                }}
              >
                <Text style={styles.seeMoreButtonText}>See More</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};

// Styles for the Home Screen
const styles = StyleSheet.create({
  // ... (existing styles)
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  // Style for the overlay view
  overlay: {
    flex: 1,
    backgroundColor: "rgba(244, 81, 30, 0.4)", // Magenta with 50% transparency
    padding: 20,
  },
  // Style for the heading text
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    textAlign: "center",
  },
  // Style for the button
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  // Style for the button text
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  // Style for the player card
  card: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    margin: 5,
  },
  // Style for the player image
  playerImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 5,
  },
  // Style for the player name text
  playerName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  // Style for the player stats text
  playerStats: {
    fontSize: 14,
  },

  // Style for the news card
  newsCard: {
    width: 200,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 10,
    margin: 10,
    elevation: 10, // Add elevation for shadow on Android
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    flex: 1,
  },
  // Style for the news image
  newsImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 10,
    flex: 1.5,
  },
  // Style for the news title text
  newsTitle: {
    fontSize: 14,
    marginBottom: 10,
    color: "#333", // Darken the text color
    flex: 1,
    letterSpacing: 0.25,
  },
  // Style for the "See More" button
  seeMoreButton: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  // Style for the "See More" button text
  seeMoreButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
});

// Exporting the HomeScreen component as the default export
export default HomeScreen;
