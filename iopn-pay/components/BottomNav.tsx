import Link from "next/link";

export default function BottomNav() {
  return (
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 border-t border-green-600 flex justify-around py-3">
            <Link href="/" className="text-green-400">Home</Link>
                  <Link href="/send">Send</Link>
                        <Link href="/receive">Receive</Link>
                              <Link href="/history">History</Link>
                                  </div>
                                    );
                                    }