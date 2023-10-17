import { Text, View } from "../components/Themed";
import { useRouter } from "expo-router";
import XPortalScreen from "../components/XPortalScreen";

import React from "react";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View className="items-center justify-center h-screen">
      <XPortalScreen />
    </View>
  );
}
