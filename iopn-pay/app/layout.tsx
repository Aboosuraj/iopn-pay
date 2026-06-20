"use client";

import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";

import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { iopnTestnet } from "@/lib/iopnChain";

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: "IOPn Pay",
    projectId: "2f556cee5880c8a19600fcfc8238056d", // ✅ YOUR WalletConnect ID
      chains: [iopnTestnet],
        ssr: true,
        });

        export default function RootLayout({
          children,
          }: {
            children: React.ReactNode;
            }) {
              return (
                  <html lang="en">
                        <body className="bg-black text-white">
                                <WagmiProvider config={config}>
                                          <QueryClientProvider client={queryClient}>
                                                      <RainbowKitProvider>
                                                                    {children}
                                                                                </RainbowKitProvider>
                                                                                          </QueryClientProvider>
                                                                                                  </WagmiProvider>
                                                                                                        </body>
                                                                                                            </html>
                                                                                                              );
                                                                                                              }