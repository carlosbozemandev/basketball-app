import React from "react";
import { ImageBackground } from "react-native";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

const PlayerScreen = ({ route }) => {
  // Assuming route.params.player contains the selected player's data
  const { player } = route.params;

  return (
    <ImageBackground
      source={{
        uri: player.image,
      }}
      style={styles.container}
    >
      <SafeAreaView style={styles.overlay}>
        <Image source={{ uri: player.image }} style={styles.playerImage} />
        <View style={styles.playerInfo}>
          <Text style={styles.playerName}>{player.name}</Text>
          <Text style={styles.playerStats}>{player.stats}</Text>
          {/* Add more player information as needed */}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(244, 81, 30, 0.4)", // Magenta with 50% transparency
    padding: 20,
  },
  playerImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 50,
  },
  playerInfo: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
  },
  playerName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  playerStats: {
    fontSize: 18,
  },
});

export default PlayerScreen;
