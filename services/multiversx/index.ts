import { XPortal, XPortalSignTx } from "react-native-xportal";
import { CHAIN_ID, DONATION_ADDRESS } from "../../data/config";

export const createDonationTransaction = async ({
  senderAddress,
}: {
  senderAddress: string;
}) => {
  try {
    const data = {
      transactions: [
        {
          value: 0,
          receiver: DONATION_ADDRESS,
          sender: senderAddress,
          gasPrice: 1000000000,
          gasLimit: 70000,
          data: "Zm9vZCBmb3IgY2F0cw==",
          chainId: CHAIN_ID,
          nonce: 1,
          version: 1,
        },
      ],
      // minGasLimit: 50_000 (optional)
    };

    const transactions = await XPortal.signTransactions(data);
    const signature = transactions[0].getSignature().toString("hex");

    console.log("signature", signature);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
