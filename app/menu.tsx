import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const MenuScreen: React.FC = () => {
  return (
    <View className="flex flex-col h-full p-4 bg-[#02100E]">
      <TouchableOpacity
        onPress={ () => router.back() }
        className="p-4"
      >
        <FontAwesome size={24} style={{ marginBottom: -3 }} name="arrow-left" color={"white"}/>
      </TouchableOpacity>
      <TouchableOpacity className="p-4 my-2 bg-white rounded shadow">
        <Text className="text-lg">Home</Text>
      </TouchableOpacity>
      <TouchableOpacity className="p-4 my-2 bg-white rounded shadow">
        <Text className="text-lg">Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity className="p-4 my-2 bg-white rounded shadow">
        <Text className="text-lg">Saved Organizations</Text>
      </TouchableOpacity>
      <TouchableOpacity className="p-4 my-2 bg-white rounded shadow">
        <Text className="text-lg">Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity className="p-4 my-2 bg-white rounded shadow">
        <Text className="text-lg">Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity className="p-4 my-2 bg-white rounded shadow">
        <Text className="text-lg">About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity className="p-4 my-2 bg-white rounded shadow">
        <Text className="text-lg">Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuScreen;
