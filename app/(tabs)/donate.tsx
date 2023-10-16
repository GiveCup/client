import React from "react";
import { ScrollView, View, Text } from "react-native";
import { OrgsData } from "../../data/orgs";
import { useAtom } from "jotai";
import { orgsAtom } from "../../store/atoms";
import OrganizationCard from "../../components/Organizations";
import { groupBy } from "../../utils/groupBy";
import CallToActionCard from "../../components/Cards/CallToActionCard";

function MainScreen() {
  const [orgs, setOrgs] = useAtom(orgsAtom);

  React.useEffect(() => {
    setOrgs((prev: any) => ({ ...prev, orgs: OrgsData }));
  }, []);

  const groupedOrgs = groupBy(orgs.orgs, "type");

  return (
    <ScrollView className="flex-1 px-5 bg-[#02100E] py-7">
      {/* <CallToActionCard /> */}
      {Object.entries(groupedOrgs).map(([type, orgsList]: any) => (
        <View key={type} className="mb-4">
          <Text className="text-white text-xl font-semibold ">
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {orgsList.map((org: any) => (
              <OrganizationCard key={org.id} orgData={org} />
            ))}
          </ScrollView>
        </View>
      ))}
    </ScrollView>
  );
}

export default MainScreen;
