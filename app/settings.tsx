import React from "react";
import { View, Text, TouchableOpacity, Switch, ScrollView } from "react-native";

const SettingsScreen: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <ScrollView className="flex flex-col h-full p-4 bg-gray-100">
      <Text>Settings</Text>
    </ScrollView>
  );
};

export default SettingsScreen;
