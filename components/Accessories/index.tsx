import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useAtom } from "jotai";
import { orgsAtom } from "../../store/atoms";
import { router } from "expo-router";

function AccesoryCard({ accesoryData }: any) {
  const [, setNgoState] = useAtom(orgsAtom);

  return (
    <View
      className="flex-col my-3 mr-2 overflow-hidden rounded-md shadow-md w-72 h-60"
    >
      <View className="flex-[6]"><Image
        source={{ uri: "https://picsum.photos/300/200" }}
        className="w-auto h-full"
        resizeMode="cover"
        /></View>
        
        <View className="flex-1 flex-col justify-end h-full p-5">
            
          <View className="flex-grow flex-row">
            <Text className="flex-1 font-bold text-xl text-white justify-start">{accesoryData.name}</Text>
            <Text className="text-xl text-white justify-end">{accesoryData.price || 1}</Text>
          </View>
        </View>
    </View>
  );
}

export default AccesoryCard;
