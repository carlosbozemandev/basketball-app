// Importing necessary components and modules from React and React Native
import React from "react";
import { ImageBackground } from "react-native";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

// Functional component for the Player Screen
const PlayerScreen = ({ route }) => {
  // Extracting the selected player's data from the route parameters
  const { player } = route.params;

  return (
    // Image background for the Player Screen
    <ImageBackground
      source={{
        uri: player.photo,
      }}
      style={styles.container}
    >
      {/* SafeAreaView for handling content within the safe area of the device */}
      <SafeAreaView style={styles.overlay}>
        {/* Player image */}
        <Image source={{ uri: player.photo }} style={styles.playerImage} />

        {/* Player information view */}
        <View style={styles.playerInfo}>
          {/* Player name */}
          <Text style={styles.playerName}>{player.name}</Text>

          {/* Player position */}
          <Text
            style={styles.playerPosition}
          >{`Position: ${player.position_name}`}</Text>

          {/* Player age */}
          <Text style={styles.playerAge}>{`Age: ${player.age}`}</Text>

          {/* Player height */}
          <Text style={styles.playerHeight}>{`Height: ${player.height}m`}</Text>

          {/* Player weight */}
          <Text
            style={styles.playerHeight}
          >{`Weight: ${player.weight}kg`}</Text>

          {/* Player Shirt Number */}
          <Text
            style={styles.playerHeight}
          >{`Shirt Number: ${player.shirt_number}`}</Text>

          {/* Player Flag */}
          <Text style={styles.playerHeight}>{`Country: ${player.flag}`}</Text>

          {/* Team details */}
          <View style={styles.teamInfo}>
            {/* Team name */}
            <Text
              style={styles.teamName}
            >{`Team: ${player.main_team.name}`}</Text>

            {/* Team logo */}
            <Image
              source={{ uri: player.main_team.logo }}
              style={styles.teamLogo}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

// Styles for the Player Screen
const styles = StyleSheet.create({
  // Style for the container view (ImageBackground)
  container: {
    flex: 1,
    resizeMode: "cover",
  },
  // Style for the overlay view (SafeAreaView)
  overlay: {
    flex: 1,
    backgroundColor: "rgba(244, 81, 30, 0.4)", // Orange with 40% transparency
    padding: 20,
  },
  // Style for the player image
  playerImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 50,
  },
  // Style for the player information view
  playerInfo: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
  },
  // Style for the player name text
  playerName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  // Style for the player position text
  playerPosition: {
    fontSize: 18,
    color: "gray",
  },
  // Style for the player age text
  playerAge: {
    fontSize: 18,
    color: "gray",
  },
  // Style for the player height text
  playerHeight: {
    fontSize: 18,
    color: "gray",
    textTransform: "capitalize",
  },
  // Style for the team details view
  teamInfo: {
    marginTop: 15,
  },
  // Style for the team name text
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  // Style for the team logo
  teamLogo: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
});

// Exporting the PlayerScreen component as the default export
export default PlayerScreen;
