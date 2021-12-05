import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ProviderWrapper } from "./ProviderWrapper";

require("@solana/wallet-adapter-react-ui/styles.css");

const network = "devnet";

ReactDOM.render(
  <React.StrictMode>
    <ProviderWrapper network={network} />
  </React.StrictMode>,
  document.getElementById("root")
);
