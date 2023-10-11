import React from "react";
import { View, Text, Image } from "react-native";
import { leaderboardData } from "../../data/orgs";
import Header from "../../components/Header";

const Leaderboard: React.FC = () => {
  const user = {
    avatar: "https://picsum.photos/2000",
    name: "@johndoe",
    level: 28,
    xp: 150,
    orgs: 5,
  };

  return (
    <View className="flex-1 bg-[#02100E] pt-10">
      <Header avatar={user.avatar} name={user.name} level={user.level} xp={user.xp} />
      <View className="p-4 mt-4">
        <Text className="mb-4 text-2xl font-bold">Leaderboard</Text>
        {leaderboardData.map((user) => (
          <View
            key={user.rank}
            className="flex flex-row items-center p-2 mb-2 bg-white rounded-md shadow"
          >
            <Text className="mr-2 font-bold">{user.rank}</Text>
            <Image
              source={{ uri: user.avatar }}
              className="w-10 h-10 mr-2 rounded-full"
            />
            <Text className="flex-1">{user.username}</Text>
            <Text className="mr-2 font-bold">{user.xp} XP</Text>
            {/* <Text
              className={
                user.trend === "up" ? "text-green-500" : "text-red-500"
              }
            >
              {user.trend === "up" ? "🔼" : "🔽"}
            </Text> */}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Leaderboard;
