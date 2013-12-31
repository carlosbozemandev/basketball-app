// Importing necessary components and modules from React and React Native
import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

// Functional component for the Players Screen
const PlayersScreen = () => {
  // Sample data for player cards
  const playersData = [
    // Player 1
    {
      id: 657,
      name: "Đorđe Gagić",
      position: "C",
      age: 32,
      height: 2.1,
      photo: "https://tipsscore.com/resb/player/dorde-gagic.png",
      team: {
        name: "BC Wolves",
        logo: "https://tipsscore.com/resb/team/bc-wolves.png",
      },
    },
    // Player 2
    {
      id: 658,
      name: "LeBron James",
      position: "SF",
      age: 36,
      height: 2.06,
      photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      team: {
        name: "Los Angeles Lakers",
        logo: "https://cdn.nba.com/logos/nba/1610612747/global/L/logo.svg",
      },
    },
    // Player 3
    {
      id: 659,
      name: "Stephen Curry",
      position: "PG",
      age: 33,
      height: 1.91,
      photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
      team: {
        name: "Golden State Warriors",
        logo: "https://cdn.nba.com/logos/nba/1610612744/global/L/logo.svg",
      },
    },
    // Player 4
    {
      id: 660,
      name: "Giannis Antetokounmpo",
      position: "PF",
      age: 26,
      height: 2.11,
      photo: "https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png",
      team: {
        name: "Milwaukee Bucks",
        logo: "https://cdn.nba.com/logos/nba/1610612749/global/L/logo.svg",
      },
    },
  ];

  // Function to render each player card
  const renderPlayerCard = ({ item }) => (
    // TouchableOpacity for each player card
    <TouchableOpacity
      style={styles.card}
      onPress={() => console.log("Player card pressed")}
    >
      {/* Player image */}
      <Image source={{ uri: item.photo }} style={styles.playerImage} />

      {/* Player information view */}
      <View style={styles.playerInfo}>
        {/* Player name */}
        <Text style={styles.playerName}>{item.name}</Text>

        {/* Player position */}
        <Text style={styles.playerPosition}>{item.position}</Text>

        {/* Player details (age and height) */}
        <Text
          style={styles.playerDetails}
        >{`Age: ${item.age} | Height: ${item.height}m`}</Text>

        {/* Team name */}
        <Text style={styles.teamName}>{`Team: ${item.team.name}`}</Text>

        {/* Team logo */}
        <Image source={{ uri: item.team.logo }} style={styles.teamLogo} />
      </View>
    </TouchableOpacity>
  );

  return (
    // Container view for the Players Screen
    <View style={styles.container}>
      {/* FlatList to display player cards */}
      <FlatList
        data={playersData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPlayerCard}
      />
    </View>
  );
};

// Styles for the Players Screen
const styles = StyleSheet.create({
  // Style for the container view
  container: {
    flex: 1,
    padding: 20,
  },
  // Style for the player card
  card: {
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
  // Style for the team name text
  teamName: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  // Style for the team logo
  teamLogo: {
    width: 40,
    height: 40,
    marginTop: 5,
  },
});

// Exporting the PlayersScreen component as the default export
export default PlayersScreen;
