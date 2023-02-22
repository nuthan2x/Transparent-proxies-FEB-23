const { ethers } = require("hardhat");
require('dotenv').config()


// rapid update without multisig using proxy Admin


// scripts/prepare_upgrade.js
async function main() {
    const proxyAddress = '0x6982fa83f040C99dF77875D352B879fc8371540e';
   
    // const BoxV2 = await ethers.getContractFactory("BoxV2");
    // console.log("Preparing upgrade...");
    // const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
    // console.log("BoxV2 at:", boxV2Address);

    console. log(proxyAddress," original Box(proxy) address")
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    console. log( "upgrade to BoxV2...")
    const boxV2 = await upgrades.upgradeProxy(proxyAddress, BoxV2)
    console. log(boxV2.address," BoxV2 address(should be the same)")

    setTimeout(() => {
      
    }, 10000);

    console. log(await upgrades.erc1967.getImplementationAddress(proxyAddress),"getImplementationAddress")

    console. log(await upgrades.erc1967.getAdminAddress(proxyAddress), "getAdminAddress")
  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });


// gnosis version -- for multisig upgrade

//   // scripts/prepare_upgrade.js
// async function main() {
//   const proxyAddress = '0xB782ae29922dB6c390494c59ba9fE070aff03a5A';
 
//   const BoxV2 = await ethers.getContractFactory("BoxV2");
//   console.log("Preparing upgrade...");
//   const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
//   console.log("BoxV2 at:", boxV2Address);
// }
 
// main()
//   .then(() => process.exit(0))
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });




    // const { ethers } = require("hardhat");
    // require('dotenv').config()
    
    // // scripts/prepare_upgrade.js
    // async function main() {
    //     const proxyAddress = '0x75479Da422b2b6A099BFEddA20929D7dEa119b0e';
    //     const PROXY_ABI = [{"inputs":[{"internalType":"address","name":"_logic","type":"address"},{"internalType":"address","name":"admin_","type":"address"},{"internalType":"bytes","name":"_data","type":"bytes"}],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"beacon","type":"address"}],"name":"BeaconUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"admin_","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"implementation_","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]
    //     const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth_goerli");
    //     const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
    //     let proxy = new ethers.Contract(proxyAddress, PROXY_ABI, wallet)
    
    //     const BoxV2 = await ethers.getContractFactory("BoxV2");
    //     console.log("Deploying Box...");
    //     const boxV2 = await BoxV2.deploy();
    //     await boxV2.deployed();
    //     console.log("boxV2.address" , boxV2.address);
    //     console.log("Preparing upgrade...");
    //     // await proxy.upgradeTo(boxV2.address);
        
    //   }
       
    //   main()
    //     .then(() => process.exit(0))
    //     .catch(error => {
    //       console.error(error);
    //       process.exit(1);
    //     });