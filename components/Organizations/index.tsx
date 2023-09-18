import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useAtom } from "jotai";
import { orgsAtom } from "../../store/atoms";

function OrganizationCard({ orgData }: any) {
  const [, setNgoState] = useAtom(orgsAtom);

  const handleClick = () => {
    setNgoState((prev) => ({ ...prev, currentNGO: orgData.id }));
    // Navigate to organization page logic here.
  };

  return (
    <TouchableOpacity
      onPress={handleClick}
      className="p-5 my-3 mr-2 bg-white rounded-md shadow-md"
    >
      <Image
        source={{ uri: orgData.image }}
        className="w-12 h-12 rounded-full"
      />
      <Text className="mt-2 text-xl font-bold">{orgData.name}</Text>
      <Text className="mt-1 text-sm text-gray-800">{orgData.description}</Text>
    </TouchableOpacity>
  );
}

export default OrganizationCard;
