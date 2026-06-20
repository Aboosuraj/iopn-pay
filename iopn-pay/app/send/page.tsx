"use client";

export default function SendPage() {
  return (
      <div className="p-6 text-white">
            <h1 className="text-2xl font-bold text-green-400">Send IOPN</h1>

                  <div className="mt-6 space-y-4">
                          <input
                                    placeholder="Recipient Address"
                                              className="w-full p-3 rounded bg-black/40 border border-green-500"
                                                      />
                                                              <input
                                                                        placeholder="Amount"
                                                                                  className="w-full p-3 rounded bg-black/40 border border-green-500"
                                                                                          />
                                                                                                  <button className="w-full bg-green-600 p-3 rounded-xl font-bold">
                                                                                                            Send
                                                                                                                    </button>
                                                                                                                          </div>
                                                                                                                              </div>
                                                                                                                                );
                                                                                                                                }