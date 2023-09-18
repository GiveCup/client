import { router } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Assuming you're using this package for icons

interface UserProps {
  avatar: string;
  name: string;
  level: string;
}

const Header = () => {
  const user = {
    avatar: "https://picsum.photos/200",
    name: "@johndoe",
    level: "Gold",
  };

  const handleLeftPress = () => {
    // Navigate to the menu or perform any other action
    router.push("/menu");
  };

  const handleNotificationPress = () => {
    // Handle notification press logic here
    router.push("/notifications");
  };
  return (
    <View className="flex-row items-center justify-between p-4 pt-10 bg-gray-200">
      {/* Left Part */}
      <TouchableOpacity
        onPress={handleLeftPress}
        className="flex-row items-center"
      >
        <Image
          source={{ uri: user.avatar }}
          className="w-10 h-10 mr-3 rounded-full"
        />
        <View>
          <Text className="font-semibold text-black text-md">{user.name}</Text>
          <Text className="text-sm text-gray-700">Level: {user.level}</Text>
        </View>
      </TouchableOpacity>

      {/* Right Part */}
      <TouchableOpacity onPress={handleNotificationPress}>
        <Icon name="notifications-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
