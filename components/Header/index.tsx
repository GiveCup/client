import { router } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // Assuming you're using this package for icons
import * as Progress from 'react-native-progress';

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

  return (
    <View className="flex-row items-center justify-between p-4 bg-gray-200">
      <TouchableOpacity
        onPress={handleLeftPress}
        className="flex-row items-center flex-1"
      >
        <Image
          source={{ uri: user.avatar }}
          className="w-16 h-16 mr-3 rounded-full"
        />
        <View
        className="flex-1 flex-col items-left">
          <Text className="font-semibold text-3xl text-center">{user.name}</Text>
          <Text className="text-base text-gray-700">Level: {user.level}</Text>
          <View><Progress.Bar progress={0.7} width={null}/></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
