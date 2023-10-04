import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import XPortalScreen from "../../components/XPortalScreen";
import Header from "../../components/Header";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100 mt-10">
      <Header />
      {/* Other home screen content goes here */}
    </View>
  );
}
