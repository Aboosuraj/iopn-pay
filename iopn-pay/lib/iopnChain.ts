import { defineChain } from "viem";

export const iopnTestnet = defineChain({
  id: 984,
    name: "IOPn Testnet",
      nativeCurrency: {
          name: "IOPn",
              symbol: "IOPN",
                  decimals: 18,
                    },
                      rpcUrls: {
                          default: {
                                http: ["https://testnet-rpc.iopn.tech"],
                                    },
                                      },
                                        blockExplorers: {
                                            default: {
                                                  name: "IOPn Explorer",
                                                        url: "https://testnet.iopn.tech",
                                                            },
                                                              },
                                                              });