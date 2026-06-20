"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function ReceivePage() {
  const [copied, setCopied] = useState(false);

    const walletAddress = "0x2f556cee5880c8a19600fcfc8238056d";

      const copyAddress = async () => {
          await navigator.clipboard.writeText(walletAddress);
              setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                    };

                      return (
                          <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-green-950 to-green-600 text-white p-6">

                                <h1 className="text-3xl font-bold text-green-400 mb-6">
                                        Receive IOPN
                                              </h1>

                                                    {/* QR CODE */}
                                                          <div className="bg-black/40 p-6 rounded-2xl border border-green-500">
                                                                  <QRCodeCanvas value={walletAddress} size={180} />
                                                                        </div>

                                                                              {/* ADDRESS */}
                                                                                    <p className="mt-6 text-xs text-gray-300 break-all text-center">
                                                                                            {walletAddress}
                                                                                                  </p>

                                                                                                        {/* COPY BUTTON */}
                                                                                                              <button
                                                                                                                      onClick={copyAddress}
                                                                                                                              className="mt-4 bg-green-600 px-6 py-2 rounded-xl font-semibold active:scale-95"
                                                                                                                                    >
                                                                                                                                            {copied ? "Copied ✔" : "Copy Address"}
                                                                                                                                                  </button>
                                                                                                                                                      </div>
                                                                                                                                                        );
                                                                                                                                                        }