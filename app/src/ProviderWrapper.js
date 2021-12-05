import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { WalletConnectionProvider } from "./components/WalletConnectionProvider";

import App from "./App";

export const ProviderWrapper = ({ network }) => (
  <WalletConnectionProvider network={network}>
    <WalletModalProvider>
      <App />
    </WalletModalProvider>
  </WalletConnectionProvider>
);
