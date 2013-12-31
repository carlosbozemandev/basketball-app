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
import { useNavigation } from "@react-navigation/native";

const url = "https://sportscore1.p.rapidapi.com/sports/3/players";
const itemsPerPage = 10;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d86b55a31emsh20bdf138bb0c79fp16104djsn08cbc3b5570f",
    "X-RapidAPI-Host": "sportscore1.p.rapidapi.com",
  },
};

const PlayersScreen = () => {
  const [players, setPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    fetchPlayers();
  }, [currentPage]);

  const fetchPlayers = () => {
    const query = `?page=${currentPage}&limit=${itemsPerPage}`;
    fetch(url + query, options)
      .then((res) => res.json())
      .then((res) => {
        setPlayers((prevPlayers) => [...prevPlayers, ...res.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSearch = (text) => {
    setSearchQuery(text);

    if (text.trim() === "") {
      fetchPlayers();
    } else {
      const filteredPlayers = players.filter(
        (player) =>
          player.name.toLowerCase().includes(text.toLowerCase()) ||
          player.id.toString().includes(text)
      );

      setPlayers(filteredPlayers);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const renderPlayerCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("PlayerProfile", { player: item })}
      key={item.id}
    >
      <Image source={{ uri: item.photo }} style={styles.playerImage} />
      <View style={styles.playerInfo}>
        <Text style={styles.playerName}>{item?.name}</Text>
        <Text style={styles.playerPosition}>{item?.position}</Text>
        <Text style={styles.playerDetails}>
          {`Age: ${item?.age} | Height: ${item?.height}m`}
        </Text>
        <Text style={styles.teamName}>{`Team: ${item?.team?.name}`}</Text>
        <Image source={{ uri: item?.team?.logo }} style={styles.teamLogo} />
      </View>
    </TouchableOpacity>
  );

  // Apply slice for pagination
  const paginatedPlayers = players.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name or ID"
        onChangeText={handleSearch}
      />

      <FlatList
        data={paginatedPlayers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPlayerCard}
        onEndReached={fetchPlayers} // Load more data when reaching the end
        onEndReachedThreshold={0.1}
      />

      <View style={styles.paginationContainer}>
        <Button title="Previous Page" onPress={handlePrevPage} />
        <Text>{`Page ${currentPage}`}</Text>
        <Button title="Next Page" onPress={handleNextPage} />
      </View>
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
    padding: 10,
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
  searchInput: {
    marginBottom: 10,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default PlayersScreen;
