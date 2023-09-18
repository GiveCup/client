import { View, Text, Image } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { OrgsData } from "../../data/orgs";

interface OrganizationProps {
  orgData: any;
}

const Organization = () => {
  const { id } = useLocalSearchParams();

  // Assuming orgData is available here, you might have to fetch it based on the id from useLocalSearchParams
  const { name, description, type, image } = OrgsData.filter((org) => {
    return org.id === id;
  })[0];
  return (
    <View className="flex flex-col items-center p-4 bg-gray-100">
      <View className="w-full max-w-md p-5 my-4 bg-white rounded-md shadow-md">
        <Image
          source={{ uri: image }}
          className="w-32 h-32 mx-auto rounded-full"
          resizeMode="cover"
        />
        <Text className="mt-4 text-xl font-bold text-center">{name}</Text>
        <Text className="mt-2 text-base text-center text-gray-500">
          {description}
        </Text>
        <View className="p-2 mt-4 bg-gray-200 rounded">
          <Text className="text-center">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Organization;
