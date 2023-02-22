require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks : {
  
    bscTestnet: {
        url: `https://bsc-testnet.public.blastapi.io	`,
        accounts: [process.env.PRIVATE_KEY]
      }
  },
  etherscan: {
    apiKey: {
      bscTestnet: process.env.ETHERSCAN_API
    }
  }
};
