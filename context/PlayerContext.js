import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PlayersContext = createContext();

export const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Load players from AsyncStorage
    const loadPlayers = async () => {
      try {
        const storedPlayers = await AsyncStorage.getItem("players");
        if (storedPlayers) {
          setPlayers(JSON.parse(storedPlayers));
        }
      } catch (error) {
        console.error("Error loading players from AsyncStorage:", error);
      }
    };

    loadPlayers();
  }, []); // Run only once on component mount

  const updatePlayers = async (newPlayers) => {
    setPlayers(newPlayers);

    // Save players to AsyncStorage
    try {
      await AsyncStorage.setItem("players", JSON.stringify(newPlayers));
    } catch (error) {
      console.error("Error saving players to AsyncStorage:", error);
    }
  };

  return (
    <PlayersContext.Provider value={{ players, updatePlayers }}>
      {children}
    </PlayersContext.Provider>
  );
};

export const usePlayers = () => {
  const context = useContext(PlayersContext);
  if (!context) {
    throw new Error("usePlayers must be used within a PlayersProvider");
  }
  return context;
};
