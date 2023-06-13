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
 
  ////////////////////////////// SCR Starships ////////////////////////////////


  {
    cid: "bafybeidmdqagx4tmrrtq5xwyh36iiwb4zwmm2ru24nv2qbudt4awljv6hq", // HTML blog example
    nftId: [
      "0x359af09528ea77b7e1fcc0f78f775d110972222950d30cbdb7804163930b2d02",
    ], // You need to own 'GM #1' to unlock this.
      // SCR - Wanderer Class Scout Ship
  },
/*
  {
    cid: "xxx", // HTML blog example
    nftId: [
      "0xfe8c9d10bb65b69906c548652a275f742a8e122f934fd7bbcd3ef1788e4793de",
    ], // You need to own 'GM #1' to unlock this.
      // SCR - Event Purr-izon Class Research Vessel
  },
*/
  ////////////////////////////// SCR Helmets ////////////////////////////////
  
  {
    cid: "bafybeieyyjgfirn4ctgglwcyb3briyhnu2v2z2jfxsgwzzprrpnxgpsfja", // MP4 video example
    nftId: [
      "0x6e9f8f2b96c7d7042a6c8cd3c59ee0748cb374988115360f23e1907cd0f55035",
    ], // You need to own 'GM #2' to unlock this.
      // SCR - Explorer - Helmet
  },

  {
    cid: "bafybeib2xaznbqspj5rkxqm6bjcvlk5kp423y3jexehuabkdsgjs54w53y", // MP4 video example
    nftId: [
      "0xfded9278d5861accc474f723b92444189b9cd56b1368084d712b6030a8cbc4fc",
    ], // You need to own 'GM #2' to unlock this.
      // SCR - Navigator - Helmet
  },

  {
    cid: "bafybeibajsozqqkmwthtekbxhhpsyhuuwv6s4aqxszjzgghkw42jaq773u", // MP4 video example
    nftId: [
      "0x4ad500e7b0b70cd32f535031d0da28f3f942fcc6788cde768e33cd2bc9c278ae",
    ], // You need to own 'GM #2' to unlock this.
      // SCR - Pilot - Helmet
  },

  {
    cid: "bafybeibhl7w3clfovbdylyhgpypr4fhaw2fbr6s3xsfugmzrhxdao7bybu", // MP4 video example
    nftId: [
      "0x6b074743823c6038b7c9a235f59d86d07d2f9ffd7604fa5eeb9f3b234139f7b3",
    ], // You need to own 'GM #2' to unlock this.
      // SCR - Engineer - Helmet
  },

  {
    cid: "bafybeifq3hkiqstwgtrg4ypejafnueohirmwxlkegabqlc7jocmp7ytkee", // MP4 video example
    nftId: [
      "0x8fa49c7426c2af6ca163938734d3937b015b6daf3e3e4c8df289957bb6dfcf3a",
    ], // You need to own 'GM #2' to unlock this.
      // SCR - Marine - Helmet
  },

  {
    cid: "bafybeiapg6cle5ppuhrtfgvpu4yfm3rpqp3qf2orc2f3auytgetu5tjbgm", // MP4 video example
    nftId: [
      "0xc5ddb728c674e3b0ef29e47f305ff064525911a16224033566c139efe5ee11f5",
    ], // You need to own 'GM #2' to unlock this.
      // SCR - Lucky - Helmet
  },

  {
    cid: "bafybeien5t6jczoys4ggywgzpts33bwh3quygqgummzrhnfb33oph3spga", // MP4 video example
    nftId: [
      "0x3d613bc01c313de86b2d553e26b863c76b859238621026dfbe9ee904a015cacd",
    ], // You need to own 'GM #2' to unlock this.
      // SCR - Commander - Helmet
  },


  ////////////////////////////// SCR Gloves ////////////////////////////////

  ////////////////////////////// SCR Boots ////////////////////////////////


  {
    cid: "bafybeihmtqdrdpg6qi7256jkppyvmofb5ivhhq3qjuafaewojdc2mpls5y", // MP4 video example
    nftId: [
      "0xd0614a56bc089a08c43d3e46d9f812d9fbe092c33be02ac5148094b74204d577",
    ], // You need to own 'GM #2' to unlock this.
      // SCR - Zenith - Jetpack
  },
  
 /* {
    cid: "bafybeihhx5v3saq3b7n55ub5q3atuw2udbqc5ictkv2ih7vd3hxptu22nu", // Web game example
    nftId: [
      "0x8aa9d39f44b4b8488d0bbf04ea12bec99ddbe676a1b9a38d853701327437e78c",
      "0x3d483f631a391a3706446613929d253cfddcb47900a07593c5004c5e3827d9ee",
    ], // You need to own 'GM #1' & 'GM #2' to unlock this.
  },*/
];

export { unlockables };
