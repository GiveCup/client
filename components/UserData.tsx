import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { XPortal, XPortalLogout } from "react-native-xportal";

interface Token {
  name: string;
}

interface NFT {
  name: string;
  imageUrl: string;
}

const UserData: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  const [balance, setBalance] = useState<string>("");
  const [tokens, setTokens] = useState<Token[]>([
    { name: "DummyToken1" },
    { name: "DummyToken2" },
  ]);
  const [nfts, setNFTs] = useState<NFT[]>([
    { name: "DummyNFT1", imageUrl: "https://dummyimage.com/100x100" },
    { name: "DummyNFT2", imageUrl: "https://dummyimage.com/100x100" },
  ]);
  const [accountInfo, setAccountInfo] = useState({}); // Type this as necessary

  useEffect(() => {
    fetchData();
  }, [XPortal]);

  const fetchData = async () => {
    try {
      const walletAddress = await XPortal.getWalletAddress();
      walletAddress && setAddress(walletAddress);

      const eGLDBalance = await XPortal.getAccountBalance();
      eGLDBalance && setBalance(eGLDBalance);

      const accountTokens = await XPortal.getAccountTokensList();
      accountTokens && setTokens(accountTokens);

      const fullAccountInfo = await XPortal.getFullAccountInfo();
      setAccountInfo(fullAccountInfo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView className="p-4 bg-gray-100 pb-20">
      <View className="pb-16">
        <View className="p-5 my-4  bg-white rounded-md shadow-md">
          <Text className="mb-3 text-2xl font-bold text-center text-gray-800">
            Welcome,
          </Text>
          <Text className="mb-5 text-lg text-center text-gray-700">
            {address}
          </Text>

          <Text className="mb-3 text-lg font-bold text-gray-700">
            EGLD Balance: {Number(balance) / 10 ** 18}
          </Text>

          <XPortalLogout className="w-full" />
        </View>

        <View className="p-5 my-4 bg-white rounded-md shadow-md">
          <Text className="mb-3 text-xl font-bold text-gray-800">Tokens</Text>
          {tokens.length > 0 ? (
            tokens.map((token, index) => (
              <Text key={index} className="mb-2 text-base text-gray-600">
                {token.name}
              </Text>
            ))
          ) : (
            <Text className="text-base text-gray-600">No tokens.</Text>
          )}
        </View>

        <View className="p-5 my-4 bg-white rounded-md shadow-md">
          <Text className="mb-3 text-xl font-bold text-gray-800">NFTs</Text>
          {nfts.length > 0 ? (
            nfts.map((nft, index) => (
              <View key={index} className="flex items-center mb-3">
                {/* <img
                src={nft.imageUrl}
                alt={nft.name}
                className="w-20 h-20 mr-3 rounded-full"
              /> */}
                <Text className="text-base text-gray-600">{nft.name}</Text>
              </View>
            ))
          ) : (
            <Text className="text-base text-gray-600">No NFTs.</Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default UserData;
