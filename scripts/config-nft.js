import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xABc3188115A53EC33E7D8d5AF6d27B970581279B",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "NomadDAO Ticket",
        description: "This NFT will give you access to NomadDAO!",
        image: readFileSync("scripts/assets/ticket.png"),
      },
    ]);
    console.log("Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()