import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const MyTeamScreen = () => {
  // Assuming teamData contains the user's team data
  const teamData = {
    name: "My Awesome Team",
    logo: "https://tipsscore.com/resb/team/bc-wolves.png",
    players: [
      {
        id: 657,
        name: "Đorđe Gagić",
        position: "C",
        age: 32,
        height: 2.1,
        photo: "https://tipsscore.com/resb/player/dorde-gagic.png",
      },
      {
        id: 659,
        name: "Đorđe Gagić",
        position: "C",
        age: 32,
        height: 2.1,
        photo: "https://tipsscore.com/resb/player/dorde-gagic.png",
      },
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
    <View style={styles.container}>
      <Image source={{ uri: teamData.logo }} style={styles.teamLogo} />
      <Text style={styles.teamName}>{teamData.name}</Text>

      <Text style={styles.sectionHeading}>Team Players:</Text>
      {teamData.players.map((player) => (
        <View key={player.id} style={styles.playerCard}>
          <Image source={{ uri: player.photo }} style={styles.playerImage} />
          <View style={styles.playerInfo}>
            <Text style={styles.playerName}>{player.name}</Text>
            <Text style={styles.playerPosition}>{player.position}</Text>
            <Text
              style={styles.playerDetails}
            >{`Age: ${player.age} | Height: ${player.height}m`}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  teamLogo: {
    width: 100,
    height: 100,
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 20,
  },
  teamName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  playerCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  playerImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  playerPosition: {
    fontSize: 16,
    color: "gray",
  },
  playerDetails: {
    fontSize: 14,
    color: "gray",
  },
});

export default MyTeamScreen;
