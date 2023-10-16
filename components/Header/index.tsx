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

const Header = (user: { avatar: string; name: string; level: number; xp: number; }) => {

  const handleLeftPress = () => {
    // Navigate to the menu or perform any other action
    router.push("/menu");
  };

  return (
    <View className="flex-row items-center justify-between px-12 pt-8 pb-4 bg-[#02100E]">
      <TouchableOpacity
        onPress={handleLeftPress}
        className="flex-row items-center flex-1"
      >
        {/* <Image
          source={{ uri: user.avatar }}
          className="w-16 h-16 mr-3 rounded-full"
        /> */}
        <View
        className="flex-1 flex-col items-left">
          <Text className="font-semibold text-white text-3xl text-center">{user.name}</Text>
          <View className="flex-grow flex-row">
            <Text className="flex-1 text-base text-white justify-start">Level: {user.level}</Text>
            <Text className="text-base text-white justify-end">{user.xp} / {user.level*10}</Text>
          </View>
          <View><Progress.Bar progress={user.xp/(user.level*10)} width={null} height={24}/></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
