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
    // Navigate to organization page logic here.
    router.push(`/orgs/${orgData.id}`);
  };

  return (
    <TouchableOpacity
      onPress={handleClick}
      className="my-3 mr-2 overflow-hidden rounded-md shadow-md"
    >
      <ImageBackground
        source={{ uri: "https://picsum.photos/300/200" }}
        style={{ width: "100%", height: 200 }}
        resizeMode="cover"
      >
        <View className="flex flex-col justify-end h-full p-5 ">
          <Text className="text-xl font-bold text-white">{orgData.name}</Text>
          <Text className="mt-1 text-sm text-gray-300">
            {orgData.description}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default OrganizationCard;
