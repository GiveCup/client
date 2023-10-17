import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const Notifications = () => {
  return (
    <ScrollView className="flex-1 px-5 bg-[#02100E] py-7">
      <View className="flex-col flex-1 p-4 bg-gray-200 rounded-3xl">
        <View className="flex-row flex-1 pb-5">
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            className="w-16 h-16 mr-3 rounded-full"
          />
          <Text className="flex-shrink">
            Long notification content goes here...
            Looooooooooooooooooooooooooooooooooonger notification conteent goes
            here... Looooooooooooooooooooooooooooooooooonger notification
            conteent goes here...
          </Text>
        </View>
        <Text className="text-right">4/10/23</Text>
      </View>
    </ScrollView>
  );
};

export default Notifications;
