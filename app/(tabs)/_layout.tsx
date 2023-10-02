import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitleAlign: "center",
          headerShown: true,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerLeft: () => (
            <Link href="/menu" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="bars"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ margin: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="donate"
        options={{
          title: "Donate",
          tabBarIcon: ({ color }) => <TabBarIcon name="money" color={color} />,
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: "Leaderboard",
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="trophy" color={color} />,
        }}
      />
      {/* <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      /> */}
    </Tabs>
  );
}
