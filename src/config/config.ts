import { Unlockable } from "./types";

/*********************************************************
Replace the `unlockables` below with your own content. 
Here are two examples:

1️⃣ Unlock a Submarined file by owning one specific NFT.
{ 
  cid: "<YOUR_CID>", 
  nftId: ["<YOUR_NFT_ID"]
}

2️⃣ Unlock a Submarined file by owning multiple NFTs.
{
  cid: "<YOUR_CID",
  nftId: [
    "<YOUR_FIRST_NFT_ID", "<YOUR_SECOND_NFT_ID", 
  ]
}
*********************************************************/

const unlockables: Unlockable[] = [
  {
    cid: "bafybeidmdqagx4tmrrtq5xwyh36iiwb4zwmm2ru24nv2qbudt4awljv6hq", // HTML blog example
    nftId: [
      "0x359af09528ea77b7e1fcc0f78f775d110972222950d30cbdb7804163930b2d02",
    ], // You need to own 'GM #1' to unlock this.
      // SCR - Wanderer Class Scout Ship
  },
  
  {
    cid: "bafybeien3riturkp3dz5weivdeyvwjn42zb5ih477tosaphsozccaqxmve", // MP4 video example
    nftId: [
      "0xfded9278d5861accc474f723b92444189b9cd56b1368084d712b6030a8cbc4fc",
    ], // You need to own 'GM #2' to unlock this.
      // SCR - Navigator - Helmet
  },
 /*
    {
    cid: "bafybeien3riturkp3dz5weivdeyvwjn42zb5ih477tosaphsozccaqxmve", // MP4 video example
    nftId: [
      "0x8fa49c7426c2af6ca163938734d3937b015b6daf3e3e4c8df289957bb6dfcf3a",
    ], // You need to own 'GM #2' to unlock this.
      // SCR - Marine - Helmet
  },
  */
 /* {
    cid: "bafybeihhx5v3saq3b7n55ub5q3atuw2udbqc5ictkv2ih7vd3hxptu22nu", // Web game example
    nftId: [
      "0x8aa9d39f44b4b8488d0bbf04ea12bec99ddbe676a1b9a38d853701327437e78c",
      "0x3d483f631a391a3706446613929d253cfddcb47900a07593c5004c5e3827d9ee",
    ], // You need to own 'GM #1' & 'GM #2' to unlock this.
  },*/
];

export { unlockables };
