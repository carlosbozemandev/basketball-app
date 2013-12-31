import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    // Load user details from AsyncStorage
    const loadUserDetails = async () => {
      try {
        const storedUserDetails = await AsyncStorage.getItem("userDetails");
        if (storedUserDetails) {
          setUserDetails(JSON.parse(storedUserDetails));
        }
      } catch (error) {
        console.error("Error loading user details from AsyncStorage:", error);
      }
    };

    loadUserDetails();
  }, []); // Run only once on component mount

  const updateUserDetails = async (newDetails) => {
    setUserDetails(newDetails);

    // Save user details to AsyncStorage
    try {
      await AsyncStorage.setItem("userDetails", JSON.stringify(newDetails));
    } catch (error) {
      console.error("Error saving user details to AsyncStorage:", error);
    }
  };

  return (
    <UserContext.Provider value={{ userDetails, updateUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
