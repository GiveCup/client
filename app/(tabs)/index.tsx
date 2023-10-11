import { StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import XPortalScreen from "../../components/XPortalScreen";
import Header from "../../components/Header";
import { useRouter } from "expo-router";
import { Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Button } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const user = {
    avatar: "https://picsum.photos/200",
    name: "@johndoe",
    level: 28,
    xp: 150,
    orgs: 5,
  };


  const handleLeftPress = () => {
    // Navigate to the menu or perform any other action
    router.push("/menu");
  };

  const onPressInv = () => {
    // Navigate to the inv
    router.push("/menu");
  };

  const onPressMarket = () => {
    // Navigate to the market
    router.push("/menu");
  };

  return (
    <View className="flex-1 bg-[#02100E] pt-10">
      <TouchableOpacity
        onPress={handleLeftPress}
        className="pl-4"
      >
        <FontAwesome size={24} style={{ marginBottom: -3 }} name="bars" color={"white"}/>
      </TouchableOpacity>
      <View className="m-4 bg-transparent">
        <Image
            source={{ uri: user.avatar }}
            className="w-full aspect-square mr-3 rounded-full"
          />
      </View>
      <Header avatar={user.avatar} name={user.name} level={user.level} xp={user.xp} />
      <Text className="text-white text-xl mx-12 mt-2 mb-2">Orgs: {user.orgs}</Text>
      <View className="flex-grow flex-row bg-transparent mt-6">
        <View className="bg-transparent ml-6 mr-auto">
          <Button
            onPress={onPressInv}
            title="Inventory"
            accessibilityLabel="Inventory"
          />
        </View>
        <View className="bg-transparent mr-6">
          <Button
            onPress={onPressMarket}
            title="Market"
            accessibilityLabel="Market"
          />
        </View>
      </View>
    </View>
  );
}
