import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";
import { Button, ScrollView, TouchableOpacity, View } from "react-native";
import { Image, Text } from "react-native";
import { groupBy } from "../utils/groupBy";
import useAllAccessories from "../hooks/useAllAccessories";
import AccessoryCard from "../components/Accessories";
import HistoryCard from "../components/History";
import { orgsAtom } from "../store/atoms";
import { useAtom } from "jotai";

export default function Inventory() {
    const router = useRouter();
    const user = {
      avatar: "https://picsum.photos/200",
      name: "@johndoe",
      level: 28,
      xp: 150,
      orgs: 5,
    };
    const [orgs, ] =useAtom(orgsAtom);
    const historyList = [
        {
          id: "1",
          date: "16/10/23",
          value: "3",
          org: orgs.orgs[0],
        },
        {
          id: "2",
          date: "18/10/23",
          value: "1",
          org: orgs.orgs[1],
        },
    ];

    const { accessories, loading, error } = useAllAccessories();
  
    if (loading) {
        console.log(loading);
      return <Text>Loading...</Text>; // Or any other loading state representation you prefer
    }
  
    if (error || !accessories) {
      console.log(error);
      return <Text>Error fetching data!</Text>;
    }
    const groupedAccessories = groupBy(accessories, "type");

    const handleArrowPress = () => {
        // Navigate back
        router.back();
    };
    return (
        <ScrollView className="flex-1 px-5 bg-[#02100E] p-9">
            <TouchableOpacity onPress={handleArrowPress} className="pl-4">
                <FontAwesome
                size={24}
                style={{ marginBottom: -3 }}
                name="arrow-left"
                color={"white"}
                />
            </TouchableOpacity>
            <View className="m-4 bg-transparent">
                <Image
                source={{ uri: user.avatar }}
                className="w-full mr-3 rounded-full aspect-square "
                />
            </View>
            <View className="mx-20 py-10">
                <Button
                    title="Refill"
                />
            </View>
            {Object.entries(groupedAccessories).map(([category, accessoriesList]: any) => (
                <View key={category} className="mb-4">
                <Text className="text-xl font-semibold text-white ">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {accessoriesList.map((accessory: any) => (
                    <AccessoryCard key={accessory.id} accesoryData={accessory} />
                    ))}
                </ScrollView>
                </View>
            ))}
            <View className="pb-12">
                <Text className="text-xl font-semibold text-white ">
                    History
                </Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {historyList.map((historyItem: any) => (
                    <HistoryCard key={historyItem.id} historyItemData={historyItem} />
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    );
}