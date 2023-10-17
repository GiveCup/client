import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { XPortal, XPortalLogin, XPortalLogout } from "react-native-xportal";
import UserData from "./UserData";
import supabase from "../services/supabase";
import { router } from "expo-router";
import { useAtom } from "jotai";
import { isConnectedAtom, isInitializedAtom } from "../store/atoms";

const XPortalScreen = () => {
  const [isInitialized, setIsInitialized] = useAtom(isInitializedAtom);
  const [isConnected, setIsConnected] = useAtom(isConnectedAtom);

  return !isConnected ? (
    <View className="bg-[#02100E] w-full h-full p-10 flex items-center justify-center">
      <Text className="mb-2 text-xl font-bold text-white">
        Make your cup count
      </Text>
      <Text className="mb-10 text-2xl font-bold text-white">GIVECUP</Text>

      <Image
        source={require("../assets/images/login.png")}
        className="w-64 h-64 mb-10" // Adjust the width and height values accordingly
      />
      <Text>Connect with xPortal</Text>
      <XPortalLogin />
    </View>
  ) : (
    <>
      {/* {isInitialized && <XPortalLogout style={{ marginTop: 20 }} />} */}
      {/* {isInitialized && <UserData />} */}

      {isInitialized && router.replace("/(tabs)")}
    </>
  );
};

export default XPortalScreen;
