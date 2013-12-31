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

const HomeScreen = ({ navigation }) => {
  // Sample data for player cards
  const playersData = [
    {
      id: "1",
      name: "Player 1",
      image:
        "https://i.pinimg.com/1200x/36/65/42/366542952dabe311406118f1ce43b5cf.jpg",
      stats: "Stats 1",
    },
    {
      id: "2",
      name: "Player 2",
      image:
        "https://i.pinimg.com/1200x/36/65/42/366542952dabe311406118f1ce43b5cf.jpg",
      stats: "Stats 2",
    },
    {
      id: "3",
      name: "Player 3",
      image:
        "https://i.pinimg.com/1200x/36/65/42/366542952dabe311406118f1ce43b5cf.jpg",
      stats: "Stats 3",
    },
    {
      id: "4",
      name: "Player 4",
      image:
        "https://i.pinimg.com/1200x/36/65/42/366542952dabe311406118f1ce43b5cf.jpg",
      stats: "Stats 4",
    },
    {
      id: "5",
      name: "Player 5",
      image:
        "https://i.pinimg.com/736x/eb/62/df/eb62df67e6cec17571db1d45c814bf44.jpg",
      stats: "Stats 5",
    },
  ];

  return (
    <ImageBackground
      source={{
        uri: "https://www.wallart.com/media/catalog/product/cache/871f459736130e239a3f5e6472128962/w/0/w03232-small.jpg",
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.heading}>Welcome to Basketball Fantasy Team</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MyTeam")}
        >
          <Text style={styles.buttonText}>Create your own team</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Players")}
        >
          <Text style={styles.buttonText}>Look at your best players</Text>
        </TouchableOpacity>

        <Text style={styles.heading}>Random Players:</Text>

        <FlatList
          data={playersData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => {
                navigation.navigate("PlayerProfile", {
                  player: item,
                });
              }}
            >
              <Image source={{ uri: item.image }} style={styles.playerImage} />
              <Text style={styles.playerName}>{item.name}</Text>
              <Text style={styles.playerStats}>{item.stats}</Text>
            </TouchableOpacity>
          )}
          numColumns={2}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(244, 81, 30, 0.4)", // Magenta with 50% transparency
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    margin: 5,
  },
  playerImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 5,
  },
  playerName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  playerStats: {
    fontSize: 14,
  },
});

export default HomeScreen;
