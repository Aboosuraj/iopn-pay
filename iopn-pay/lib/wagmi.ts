import { createConfig, http } from "wagmi";
import { iopnTestnet } from "./iopnChain";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [iopnTestnet],
    connectors: [injected()],
      transports: {
          [iopnTestnet.id]: http("https://testnet-rpc.iopn.tech"),
            },
            });