"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import BalanceCard from "@/components/BalanceCard";
import ActionButton from "@/components/ActionButton";

export default function Home() {
  return (
      <main className="min-h-screen px-4 pt-6 pb-20 flex flex-col gap-6">
            
                  <Navbar />

                        <div className="flex justify-center">
                                <ConnectButton />
                                      </div>

                                            <BalanceCard />

                                                  <div className="grid grid-cols-2 gap-4">
                                                          <ActionButton title="Send" href="/send" />
                                                                  <ActionButton title="Receive" href="/receive" />
                                                                          <ActionButton title="History" href="/history" />
                                                                                  <ActionButton title="Swap (Soon)" href="#" />
                                                                                        </div>

                                                                                              <BottomNav />
                                                                                                  </main>
                                                                                                    );
                                                                                                    }