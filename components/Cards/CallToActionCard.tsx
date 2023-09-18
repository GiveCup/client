import React from "react";
import { View, Text, ImageBackground } from "react-native";

const CallToActionCard: React.FC = () => {
  return (
    <View className="mb-8 overflow-hidden rounded-md shadow-lg ">
      <ImageBackground
        source={{ uri: "https://example.com/abstract-bg.jpg" }}
        style={{ width: "100%", height: 200 }}
        resizeMode="cover"
      >
        <View className="flex flex-col justify-center h-full px-6 bg-gray-600 bg-opacity-30">
          <Text className="mb-3 text-xl font-extrabold text-white">
            Contribute to causes and win NFTs.
          </Text>
          <Text className="text-sm text-gray-300">
            Earn Item Packs NFTs for each contribution you make. Open them and
            earn brand new items you can trade and use.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CallToActionCard;
