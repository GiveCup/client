import React from "react";
import {
  Text,
  View,
  Image,
} from "react-native";

function AccesoryCard({ accesoryData }: any) {

  return (
    <View
      className="flex-col my-3 mr-2 overflow-hidden rounded-md shadow-md w-48 h-60 bg-[#101B19]"
    >
      <View className="flex-[8]"><Image
        source={{ uri: "https://picsum.photos/300/200" }}
        className="w-auto h-full"
        resizeMode="cover"
        /></View>
        
        <View className="flex-1 flex-col justify-end h-full p-5">
            
          <View className="flex-grow flex-row">
            <Text className="flex-1 font-bold text-base text-white justify-start">{accesoryData.name}</Text>
            <Text className="text-base text-white justify-end">{accesoryData.price || 1}</Text>
          </View>
        </View>
    </View>
  );
}

export default AccesoryCard;
