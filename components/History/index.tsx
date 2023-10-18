import React from "react";
import {
  Text,
  View,
  Image,
} from "react-native";

function HistoryCard({ historyItemData }: any) {

  return (
    <View
      className="flex-row my-3 mr-2 overflow-hidden rounded-md shadow-md w-64 h-60 bg-[#101B19]"
    >
        <View className="flex-[2]">
            <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            className="w-auto h-full"
            resizeMode="cover"
            />
        </View>
        
        <View className="flex-1 flex-col justify-end h-full p-5">
            
          <View className="flex-grow flex-col">
            <Text className="text-xl text-white justify-start">{historyItemData.value || 1} EGLD</Text>
            <View className="flex-1 justify-center items-center">
                <Image
                source={{ uri: "https://picsum.photos/100" }}
                className="w-20 h-20 rounded-full"
                resizeMode="cover"
                />
            </View>
            <Text className="font-bold text-base text-white justify-end">{historyItemData.date}</Text>
          </View>
        </View>
    </View>
  );
}

export default HistoryCard;
