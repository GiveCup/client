import React, { useState, useEffect } from "react";
import { ScrollView, View, Text } from "react-native";

import OrganizationCard from "../../components/Organizations";
import { groupBy } from "../../utils/groupBy";
import CallToActionCard from "../../components/Cards/CallToActionCard";
import useOrganizations from "../../hooks/useOrganizations";

const Donate = () => {
  const { orgs, loading, error } = useOrganizations();

  if (loading) {
    return <Text>Loading...</Text>; // Or any other loading state representation you prefer
  }

  if (error || !orgs) {
    return <Text>Error fetching data!</Text>;
  }

  const groupedOrgs = groupBy(orgs, "category");

  return (
    <ScrollView className="flex-1 px-5 bg-[#02100E] py-7">
      {/* <CallToActionCard /> */}
      {Object.entries(groupedOrgs).map(([category, orgsList]: any) => (
        <View key={category} className="mb-4">
          <Text className="text-xl font-semibold text-white ">
            {category.charAt(0).toUpperCase() + category.slice(1)}
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
};

export default Donate;
