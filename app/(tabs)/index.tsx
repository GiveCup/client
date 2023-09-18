import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import XPortalScreen from "../../components/XPortalScreen";
import Header from "../../components/Header";

export default function HomeScreen() {
  const userData = {
    avatar: "https://picsum.photos/200",
    name: "@johndoe",
    level: "Gold",
  };

  const handleLeftPress = () => {
    // Navigate to the menu or perform any other action
  };

  const handleNotificationPress = () => {
    // Handle notification press logic here
  };

  return (
    <View className="flex-1">
      <Header
        user={userData}
        onLeftPress={handleLeftPress}
        onNotificationPress={handleNotificationPress}
      />
      {/* Other home screen content goes here */}
    </View>
  );
}
