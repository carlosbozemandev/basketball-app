// Importing necessary components and modules from React and React Native
import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

// Functional component for the Home Screen
const HomeScreen = ({ navigation }) => {
  // Sample data for player cards
  const playersData = [
    // Player 1
    {
      id: "1",
      name: "Player 1",
      image:
        "https://cdn.vox-cdn.com/thumbor/LDajBWPPYMNb3ZGm1IJAfRXIIoE=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24775948/1506053682.jpg",
      stats: "Stats 1",
    },
    // Player 2
    {
      id: "2",
      name: "Player 2",
      image:
        "https://i.guim.co.uk/img/media/0eded50be085ea327572a9a1bb6e2712eb59fff4/0_35_5023_3014/master/5023.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c46ba8019b460e965a1c484da680f867",
      stats: "Stats 2",
    },
    // Player 3
    {
      id: "3",
      name: "Player 3",
      image:
        "https://snworksceo.imgix.net/rce/cc1ff6ea-4f02-4d48-9149-2284bd4aa10e.sized-1000x1000.jpg?w=1000",
      stats: "Stats 3",
    },
    // Player 4
    {
      id: "4",
      name: "Player 4",
      image:
        "https://snworksceo.imgix.net/rce/cc1ff6ea-4f02-4d48-9149-2284bd4aa10e.sized-1000x1000.jpg?w=1000",
      stats: "Stats 4",
    },
    // Player 5
    {
      id: "5",
      name: "Player 5",
      image:
        "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/10/1200/675/Steeve-Ho-You-Fat2.jpg?ve=1&tl=1",
      stats: "Stats 5",
    },
  ];

  return (
    // Background Image for the Home Screen
    <ImageBackground
      source={{
        uri: "https://media.istockphoto.com/id/535814795/photo/basketball-player-in-jump-shot.webp?b=1&s=170667a&w=0&k=20&c=i7OnE5znRzS3h9EpWH8EaD5cbIlv9V7ArC3cdMFo4Ro=",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        {/* Heading for the Home Screen */}
        <Text style={styles.heading}>Welcome to Basketball Fantasy Team</Text>

        {/* Button to navigate to the "MyTeam" screen */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MyTeam")}
        >
          <Text style={styles.buttonText}>Create your own team</Text>
        </TouchableOpacity>

        {/* Button to navigate to the "Players" screen */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Players")}
        >
          <Text style={styles.buttonText}>Look at your best players</Text>
        </TouchableOpacity>

        {/* Heading for the Random Players section */}
        <Text style={styles.heading}>Random Players:</Text>

        {/* FlatList to display random player cards */}
        <FlatList
          data={playersData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            // TouchableOpacity for each player card, navigating to the "PlayerProfile" screen
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                navigation.navigate("PlayerProfile", {
                  player: item,
                });
              }}
            >
              {/* Player image */}
              <Image source={{ uri: item.image }} style={styles.playerImage} />

              {/* Player name */}
              <Text style={styles.playerName}>{item.name}</Text>

              {/* Player stats */}
              <Text style={styles.playerStats}>{item.stats}</Text>
            </TouchableOpacity>
          )}
          numColumns={2}
        />
      </View>
    </ImageBackground>
  );
};

// Styles for the Home Screen
const styles = StyleSheet.create({
  // Style for the background image
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
});

// Exporting the HomeScreen component as the default export
export default HomeScreen;
