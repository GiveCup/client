import { Text, View } from "../components/Themed";
import { useRouter } from "expo-router";
import XPortalScreen from "../components/XPortalScreen";

import { useEffect } from "react";
import React from "react";
import { XPortal } from "react-native-xportal";
import supabase from "../services/supabase";
import { useAtom } from "jotai";
import { isConnectedAtom, isInitializedAtom } from "../store/atoms";


export default function LoginScreen() {
  const router = useRouter();


  const [isInitialized, setIsInitialized] = useAtom(isInitializedAtom);
  const [isConnected, setIsConnected] = useAtom(isConnectedAtom);

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
          url: "https://givecup.io/",
          icons: ["<https://img.com/linkToIcon.png>"],
          name: "GiveCup",
        },
        callbacks,
      });

      setIsInitialized(true);

      console.log("setIsInitialized");
      const address = XPortal.getWalletAddress();
      const account = XPortal.getFullAccountInfo();
      console.log(address,account);

      // Save user data to Supabase (only if they're a new user)
      const { data, error } = await supabase
        .from("users")
        .upsert([{ address: address, ...account }]);

      if (error) console.error("Error inserting user:", error);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="items-center justify-center h-screen">
      <XPortalScreen />
    </View>
  );
}
