import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";

const url = "https://sportscore1.p.rapidapi.com/sports/3/players";
const itemsPerPage = 10;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d86b55a31emsh20bdf138bb0c79fp16104djsn08cbc3b5570f",
    "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
  },
};

// Functional component for the Players Screen
const PlayersScreen = () => {
  const [players, setPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = () => {
    const query = `?page=${currentPage}&limit=${itemsPerPage}`;
    fetch(url + query, options)
      .then((res) => res.json())
      .then((res) => {
        setPlayers(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const renderPlayerCard = ({ item }) => (
    // TouchableOpacity for each player card
    <TouchableOpacity
      style={styles.card}
      onPress={() => console.log("Player card pressed")}
      key={item.id}
    >
      {/* Player image */}
      <Image source={{ uri: item.photo }} style={styles.playerImage} />

      {/* Player information view */}
      <View style={styles.playerInfo}>
        {/* Player name */}
        <Text style={styles.playerName}>{item?.name}</Text>

        {/* Player position */}
        <Text style={styles.playerPosition}>{item?.position}</Text>

        {/* Player details (age and height) */}
        <Text
          style={styles.playerDetails}
        >{`Age: ${item?.age} | Height: ${item?.height}m`}</Text>

        {/* Team name */}
        <Text style={styles.teamName}>{`Team: ${item?.team?.name}`}</Text>

        {/* Team logo */}
        <Image source={{ uri: item?.team?.logo }} style={styles.teamLogo} />
      </View>
    </TouchableOpacity>
  );

  const handleSearch = () => {
    // Perform search logic based on the searchQuery
    // You can filter the players array based on name or id
    const filteredPlayers = players.filter(
      (player) =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        player.id.toString().includes(searchQuery)
    );

    setPlayers(filteredPlayers);
  };

  return (
    // Container view for the Players Screen
    <View style={styles.container}>
      {/* Search bar and button */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name or ID"
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      {/* FlatList to display player cards */}
      <FlatList
        data={players}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPlayerCard}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
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
    padding: 10,
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
  // Style for the search container
  searchContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  // Style for the search input
  searchInput: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
  },
});

// Exporting the PlayersScreen component as the default export
export default PlayersScreen;
