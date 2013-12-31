import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { usePlayers } from "../context/PlayerContext";

const CreateTeamScreen = () => {
  const { players } = usePlayers(); // Assuming you have a context for players
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [teamName, setTeamName] = useState("");

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
      }
    }
  };

  const handleTeamSubmit = () => {
    // Save the team details (teamName and selectedPlayers) to your context or AsyncStorage
    // ...

    // Reset state after submitting the team
    setTeamName("");
    setSelectedPlayers([]);
  };

  const renderPlayerCard = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.card,
        selectedPlayers.some((selected) => selected.id === item.id) &&
          styles.selectedCard,
      ]}
      onPress={() => togglePlayerSelection(item)}
    >
      <Text style={styles.playerName}>{item.name}</Text>
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
      />

      {selectedPlayers.length > 0 && (
        <Text style={styles.header}>Selected Players</Text>
      )}

      {players && players.length === 0 ? (
        <Text style={styles.header}>No Players Found</Text>
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPlayerCard}
          numColumns={3}
        />
      )}
      <TouchableOpacity style={styles.submitButton} onPress={handleTeamSubmit}>
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
  submitButton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default CreateTeamScreen;
