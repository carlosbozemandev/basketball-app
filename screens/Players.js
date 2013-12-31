import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const PlayersScreen = () => {
  // Sample data for player cards
  const playersData = [
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

  const renderPlayerCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => console.log("Player card pressed")}
    >
      <Image source={{ uri: item.photo }} style={styles.playerImage} />
      <View style={styles.playerInfo}>
        <Text style={styles.playerName}>{item.name}</Text>
        <Text style={styles.playerPosition}>{item.position}</Text>
        <Text
          style={styles.playerDetails}
        >{`Age: ${item.age} | Height: ${item.height}m`}</Text>
        <Text style={styles.teamName}>{`Team: ${item.team.name}`}</Text>
        <Image source={{ uri: item.team.logo }} style={styles.teamLogo} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={playersData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPlayerCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
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
  teamName: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  teamLogo: {
    width: 40,
    height: 40,
    marginTop: 5,
  },
});

export default PlayersScreen;
