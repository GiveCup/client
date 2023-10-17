import { StyleSheet, TouchableOpacity } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import XPortalScreen from "../../components/XPortalScreen";
import Header from "../../components/Header";
import { useRouter } from "expo-router";
import { Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Button } from "react-native";
import { XPortal, XPortalLogout } from "react-native-xportal";
import { createDonationTransaction } from "../../services/multiversx";

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
    router.push("/inv");
  };

  const onPressMarket = () => {
    // Navigate to the market
    router.push("/marketplace");
  };

  return (
    <View className="flex-1 bg-[#02100E] pt-10">
      <TouchableOpacity onPress={handleLeftPress} className="pl-4">
        <FontAwesome
          size={24}
          style={{ marginBottom: -3 }}
          name="bars"
          color={"white"}
        />
      </TouchableOpacity>
      <View className="m-4 bg-transparent">
        <Image
          source={{ uri: user.avatar }}
          className="w-full mr-3 rounded-full aspect-square "
        />
      </View>

      <Header
        avatar={user.avatar}
        name={user.name}
        level={user.level}
        xp={user.xp}
      />
      <Text className="mx-12 mt-2 mb-2 text-2xl text-white">
        Orgs: {user.orgs}
      </Text>
      <View className="flex-row flex-grow mt-6 bg-transparent">
        <View className="ml-6 mr-auto bg-transparent">
          <Button
            onPress={onPressInv}
            title="Inventory"
            accessibilityLabel="Inventory"
          />
        </View>
        <View className="mr-6 bg-transparent">
          <Button
            onPress={onPressMarket}
            title="Market"
            accessibilityLabel="Market"
          />
        </View>
      </View>
      <Button
        title="Send TX"
        onPress={async () => {
          try {
            await createDonationTransaction({
              senderAddress:
                "erd1ju59m5rcrulg0h87ysed5acrz08xa4pkzts0hrzy2lau3ak3ne0sauhxgx",
            });
          } catch (e) {
            console.log("Error", e);
          }
        }}
        accessibilityLabel="Send TX"
      />

    </View>
  );
}
