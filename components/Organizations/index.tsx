import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useAtom } from "jotai";
import { orgsAtom } from "../../store/atoms";
import { router } from "expo-router";

function OrganizationCard({ orgData }: any) {
  const [, setNgoState] = useAtom(orgsAtom);

  const handleClick = () => {
    setNgoState((prev) => ({ ...prev, currentNGO: orgData.id }));
    router.push(`/orgs/${orgData.id}`);
  };

  return (
    <TouchableOpacity
      onPress={handleClick}
      className="my-3 mr-2 overflow-hidden rounded-md shadow-md w-72 h-60"
    >
      <ImageBackground
        source={{ uri: "https://picsum.photos/300/200" }}
        className="w-full h-full"
        resizeMode="cover"
      >
        <View className="flex flex-col justify-end h-full p-5">
          <Text className="text-xl font-bold text-white truncate">
            {orgData.name}
          </Text>
          <Text
            numberOfLines={2}
            className="mt-1 text-sm text-gray-300 truncate"
          >
            {orgData.description}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default OrganizationCard;
