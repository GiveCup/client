import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router } from "expo-router";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { useColorScheme } from "react-native";
import { XPortal } from "react-native-xportal";
import supabase from "../services/supabase";
import { useAtom } from "jotai";
import { isConnectedAtom, isInitializedAtom } from "../store/atoms";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  const [isInitialized, setIsInitialized] = useAtom(isInitializedAtom);
  const [isConnected, setIsConnected] = useAtom(isConnectedAtom);

  console.log("isInitialized", isInitialized);

  useEffect(() => {
    initializeXPortal();
  }, []);

  const initializeXPortal = async () => {
    const callbacks = {
      onClientLogin: async () => {
        console.log("Logged in");
        setIsConnected(true);

        const address = XPortal.getWalletAddress();
        const account = XPortal.getFullAccountInfo();

        // Save user data to Supabase (only if they're a new user)
        const { data, error } = await supabase
          .from("users")
          .insert([{ address: address, ...account }], { upsert: true });

        if (error) console.error("Error inserting user:", error);
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
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="orgs/[id]" options={{ headerShown: false }} />
        <Stack.Screen name="menu" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
