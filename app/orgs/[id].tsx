import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { OrgsData } from "../../data/orgs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import useOrganization from "../../hooks/useOrganization";

const Organization = () => {
  const { id } = useLocalSearchParams();
  const { orgData, loading, error } = useOrganization(Number(id) || 1);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching data!</Text>;
  if (!orgData) return <Text>Organization not found!</Text>;

  return (
    <View style={{ flex: 1, backgroundColor: "#02100E" }}>
      <ScrollView className="flex-1 p-4">
        <TouchableOpacity onPress={router.back} className="p-4">
          <FontAwesome size={24} name="arrow-left" color={"white"} />
        </TouchableOpacity>
        <View className="self-center w-full max-w-lg p-5 mt-5 bg-white rounded-lg shadow-lg">
          <Image
            source={{ uri: orgData.logo_url }}
            className="w-24 h-24 mx-auto rounded-full"
            resizeMode="cover"
          />
          <Text className="mt-4 text-xl font-bold text-center">
            {orgData.name}
          </Text>
          <Text className="mt-2 text-sm text-center text-gray-600">
            {orgData.description}
          </Text>
          <View className="p-2 mt-4 bg-gray-200 rounded">
            <Text className="text-sm text-center text-gray-600">
              {orgData.category}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              /* Navigate or expand the 'about' section */
            }}
          >
            <Text className="mt-4 font-semibold text-md">About</Text>
            <Text className="mt-1 text-sm">{orgData.about}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              /* Navigate or expand the 'goals' section */
            }}
          >
            <Text className="mt-4 text-sm font-semibold">Goals</Text>
            <Text className="mt-1 text-sm">{orgData.goals}</Text>
          </TouchableOpacity>

          {/* Add more subsections in a similar pattern, if needed */}

          <Text className="mt-4 text-sm text-blue-500 underline">
            {orgData.website}
          </Text>
          <Text className="mt-2 text-sm">Contact: {orgData.contact_email}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Organization;
