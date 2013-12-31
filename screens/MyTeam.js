// Importing necessary components and modules from React and React Native
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// Functional component for the My Team Screen
const MyTeamScreen = () => {
  // Sample data for the user's team
  const teamData = {
    name: "My Awesome Team",
    logo: "https://tipsscore.com/resb/team/bc-wolves.png",
    players: [
      // Player 1
      {
        id: 657,
        name: "Đorđe Gagić",
        position: "C",
        age: 32,
        height: 2.1,
        photo: "https://tipsscore.com/resb/player/dorde-gagic.png",
      },
      // Player 2
      {
        id: 659,
        name: "Đorđe Gagić",
        position: "C",
        age: 32,
        height: 2.1,
        photo: "https://tipsscore.com/resb/player/dorde-gagic.png",
      },
      // Player 3
      {
        id: 680,
        name: "Đorđe Gagić",
        position: "C",
        age: 32,
        height: 2.1,
        photo: "https://tipsscore.com/resb/player/dorde-gagic.png",
      },
      // Add more players as needed
    ],
  };

  return (
    // Container view for the My Team Screen
    <View style={styles.container}>
      {/* Team logo */}
      <Image source={{ uri: teamData.logo }} style={styles.teamLogo} />

      {/* Team name */}
      <Text style={styles.teamName}>{teamData.name}</Text>

      {/* Section heading for team players */}
      <Text style={styles.sectionHeading}>Team Players:</Text>

      {/* Mapping through each player in the teamData to display player cards */}
      {teamData.players.map((player) => (
        // View for each player card
        <View key={player.id} style={styles.playerCard}>
          {/* Player image */}
          <Image source={{ uri: player.photo }} style={styles.playerImage} />

          {/* Player information */}
          <View style={styles.playerInfo}>
            {/* Player name */}
            <Text style={styles.playerName}>{player.name}</Text>

            {/* Player position */}
            <Text style={styles.playerPosition}>{player.position}</Text>

            {/* Player details (age and height) */}
            <Text
              style={styles.playerDetails}
            >{`Age: ${player.age} | Height: ${player.height}m`}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

// Styles for the My Team Screen
const styles = StyleSheet.create({
  // Style for the container view
  container: {
    flex: 1,
    padding: 20,
  },
  // Style for the team logo
  teamLogo: {
    width: 100,
    height: 100,
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 20,
  },
  // Style for the team name text
  teamName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  // Style for the section heading text
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  // Style for the player card
  playerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  // Style for the player image
  playerImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  // Style for the player information view
  playerInfo: {
    flex: 1,
  },
  // Style for the player name text
  playerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  // Style for the player position text
  playerPosition: {
    fontSize: 16,
    color: "gray",
  },
  // Style for the player details text (age and height)
  playerDetails: {
    fontSize: 14,
    color: "gray",
  },
});

// Exporting the MyTeamScreen component as the default export
export default MyTeamScreen;
