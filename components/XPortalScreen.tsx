import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { XPortal, XPortalLogin, XPortalLogout } from "react-native-xportal";
import UserData from "./UserData";

const XPortalScreen = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initializeXPortal();
  }, []);

  const initializeXPortal = async () => {
    const callbacks = {
      onClientLogin: async () => {
        console.log("Logged in");
        setIsConnected(true);
      },
      onClientLogout: async () => {
        console.log("Logged out");
        setIsConnected(false);
      },
      onClientEvent: async (event: any) => {
        console.log("event -> ", event);
      },
    };

    try {
      await XPortal.initialize({
        chainId: "d", // Update this with your chain ID
        projectId: "3c6a41c249830b2c2e25cafe4796e62b", // Get from https://cloud.walletconnect.com/app
        metadata: {
          description: "Connect with X",
          url: "https://AltruAvatars.io",
          icons: ["<https://img.com/linkToIcon.png>"],
          name: "AltruAvatars",
        },
        callbacks,
      });

      setIsInitialized(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="text-red">
      {!isConnected ? (
        <>
          <Text>Connect with xPortal</Text>
          <XPortalLogin />
        </>
      ) : (
        <>
          {/* {isInitialized && <XPortalLogout style={{ marginTop: 20 }} />} */}
          {isInitialized && <UserData />}
        </>
      )}
    </View>
  );
};

export default XPortalScreen;
