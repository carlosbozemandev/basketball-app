import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { usePlayers } from "../context/PlayerContext";
import { colors } from "../theme";
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

const CreateTeamScreen = () => {
  const { updatePlayers } = usePlayers(); // Assuming you have a context for players
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [playersData, setPlayersData] = useState([]);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPlayers = () => {
      fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
          if (res?.data) {
            setPlayersData(res.data);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchPlayers();
  }, []);

  const togglePlayerSelection = (player) => {
    // Check if the player is already selected, if yes, remove from the list
    const isSelected = selectedPlayers.some(
      (selected) => selected.id === player.id
    );
    if (isSelected) {
      setSelectedPlayers((prevPlayers) =>
        prevPlayers.filter((selected) => selected.id !== player.id)
      );
    } else {
      // Check if the selected players are less than 12 before adding
      if (selectedPlayers.length < 12) {
        setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
      } else {
        // Show a message or take appropriate action if the user tries to select more than 12 players
        console.warn("You can only select up to 12 players for your team.");
        alert("You can only select up to 12 players for your team.");
      }
    }
  };

  const handleTeamSubmit = () => {
    // Save the team details (teamName and selectedPlayers) to your context or AsyncStorage
    // ...
    console.log("Team Name:", teamName);
    console.log("Selected Players:", selectedPlayers);

    if (teamName.length < 5) {
      setError(true);
      return;
    }
    updatePlayers({
      name: teamName,
      players: selectedPlayers,
    });
    navigation.navigate("TabScreen");

    // Reset state after submitting the team
    setTeamName("");
    setSelectedPlayers([]);
  };

  // console.log(playersData,"playersdata -------------------------------------")

  const renderPlayerCard = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.card,
        selectedPlayers.some((selected) => selected.id === item.id) &&
          styles.selectedCard,
      ]}
      onPress={() => togglePlayerSelection(item)}
    >
      <Image source={{ uri: item.photo }} style={styles.playerImage} />
      <Text style={styles.playerName}>{item?.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Your Own Basketball Team</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Team Name"
        value={teamName}
        onChangeText={(text) => setTeamName(text)}
        onTouchEnd={() => setError(true)}
      />
      {error && teamName.length < 5 && (
        <Text style={styles.errorText}>
          Team name must be required and at least 5 characters long
        </Text>
      )}

      {selectedPlayers.length > 0 ? (
        <Text style={styles.header}>
          Selected Players: {selectedPlayers.length}/12
        </Text>
      ) : (
        <Text style={styles.header}>Select Players:</Text>
      )}

      {playersData && playersData.length === 0 ? (
        <Text style={styles.header}>No Players Found</Text>
      ) : (
        <FlatList
          data={playersData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPlayerCard}
          numColumns={3}
        />
      )}
      <TouchableOpacity
        style={[
          styles.submitButton,
          selectedPlayers.length < 12 && { opacity: 0.5 },
        ]}
        onPress={handleTeamSubmit}
        disabled={selectedPlayers.length < 12}
      >
        <Text style={styles.submitButtonText}>Submit Team</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    margin: 5,
  },
  selectedCard: {
    backgroundColor: "lightblue",
  },
  playerName: {
    fontSize: 16,
  },
  playerImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default CreateTeamScreen;
